from flask import Flask,request,redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import migrate,Migrate
from flask.templating import render_template
from flask_mail import Mail,Message
otp=''
r=[]
police_station_master=''
s=[{"crime":"","DoL":"","Level":None,"Status":""}]
app=Flask(__name__)
app.debug=True
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db'
db=SQLAlchemy(app)
migrate=Migrate(app,db)
# mail=Mail(app)
# app.config['MAIL_SERVER']='smtp.gmail.com'
# app.config['MAIL_PORT']=465
# app.config['MAIL_USERNAME']='barnilsarma@gmail.com'
# app.config['MAIL_PASSWORD']='barnil2003'
# app.config['MAIL_USE_TLS']=False
# app.config['MAIL_USE_SSL']=True
# mail=Mail(app)
class Police(db.Model):
    PoliceStation=db.Column(db.String(20),nullable=False,unique=True,primary_key=True)
    District=db.Column(db.String(20),nullable=False,unique=False)
    PhNo=db.Column(db.String(10),nullable=False,unique=False)
    password=db.Column(db.String(20),nullable=False,unique=False)
    def __repr__(self):
        return f"PoliceStation:{self.PoliceStation},District:{self.District},PhNo:{self.PhNo},password:{self.password}"
class fir(db.Model):
    Id=db.Column(db.Integer,primary_key=True)
    PoliceStation=db.Column(db.String(20),nullable=False,unique=False)
    place=db.Column(db.String(20),nullable=False,unique=False)
    crime=db.Column(db.String(20),nullable=False,unique=False)
    DoL=db.Column(db.String(10),nullable=False,unique=False)
    level=db.Column(db.Integer,nullable=False,unique=False)
    status=db.Column(db.String(1),nullable=False,unique=False)
    def __repr__(self):
        return f"PoliceStation:{self.PoliceStation},place:{self.place},crime:{self.crime},DoL:{self.DoL},level:{self.level},status:{self.status}"
@app.route('/CrimeInfo',methods=['POST'])
def CrimeInfo():
    place=request.form.get('place')
    crime=request.form.get('crime')
    dol=request.form.get('dol')
    level=request.form.get('level')
    status=request.form.get('status')
    h=fir(PoliceStation=police_station_master,place=place,crime=crime,DoL=dol,level=level,status=status)
    db.session.add(h)
    db.session.commit()
    j=h.query.all()
    print(j)
    return "ok"
@app.route('/LogRes',methods=["GET","POST"])
def loginRes():
    global police_station_master
    p=Police.query.all()
    stationNameLog=request.form['stationNameLog']
    stationdistLog=request.form['stationdistLog']
    phoneNumberLog=request.form['phoneNumberLog']
    LogPass=request.form['LogPass']
    i=0
    for data in p:
        if(data.PoliceStation==stationNameLog):
            i=1
            if( data.password==LogPass):
                # q=fir.query.all()
                # for rec in q:
                #     if(rec.PoliceStation==stationNameLog):
                #         r.append({"crime":rec.crime,"DoL":rec.DoL,"Level":rec.level,"Status":rec.status})
                police_station_master=stationNameLog
                return redirect('http://127.0.0.1:5173/FirReg')
            else:
                return "Invalid Password"
    if(i==0):
        return "Record not found"
@app.route('/Reg',methods=['POST'])
def register():
    stationNameReg=request.form.get('stationNameReg')
    stationdistReg=request.form.get('stationdistReg')
    phoneNumberReg=request.form.get('phoneNumberReg')
    RegPass=request.form.get('RegPass')
    try:
        p=Police(PoliceStation=stationNameReg,District=stationdistReg,PhNo=phoneNumberReg,password=RegPass)
        db.session.add(p)
        db.session.commit()
        return "ok"
    except:
        return "Could'nt register"
@app.route('/UserPage',methods=['POST'])
def UserPage():
    PlaceOfVisit=request.form.get('PlaceOfVisit')
    DurationOfVisit=request.form.get('DurationOfVisit')
    records=fir.query.all()
    crime_rating_data=[]
    for data in records:
        if(data.place.upper()==PlaceOfVisit.upper()):
            crime_rating_data.append(data.level)
    avg=sum(crime_rating_data)/7
    danger_level='Safe'
    if(avg<=3):
        danger_level='Safe'
    elif(3<avg<=5):
        danger_level='Mildly Unsafe'
    elif(5<avg<=7):
        danger_level='Not Recommended to travel'
    elif(avg>7):
        danger_level='Critically Dangerous'
    return danger_level
if(__name__=='__main__'):
    app.run(host='travel-safe-lwlyu1ue5-barnilsarma.vercel.app')
