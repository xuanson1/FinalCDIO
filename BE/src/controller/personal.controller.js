const Personal = require("../model/personal");

const getCreatePersonal = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, address,point } = req.body;
    console.log(req.body);

    const personal = new Personal({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      point,
    });
    const savedPersonal = await personal.save();

    return res.status(200).json({
      success: true,
      data: {
        _id: savedPersonal._id,
        firstName: savedPersonal.firstName,
        lastName: savedPersonal.lastName,
        email: savedPersonal.email,
        phoneNumber: savedPersonal.phoneNumber,
        address: savedPersonal.address,
        point: savedPersonal.point,
      },
    });
  } catch (error) {
    console.log("Loi", error);
  }
};

const getPersonal = async (req, res) => {
  const personal = await Personal.find();
  return res.json({ success: true, data: personal });
};

const getPersonalByID = async (req, res) => {
  console.log(req.params.personalId);
  const personal = await Personal.findById(req.params.personalId);
  console.log(personal);
  return res.json({ success: true, data: personal });
};

const getDeletePersonalByID = async (req, res) => {
  const personal = await Personal.findByIdAndDelete(req.params.personalId);
  const list = await Personal.find();
  return res.json({ success: true, data: list });
};

const getUpdatePersonalByID = async (req, res) => {
  console.log(req.params.personalId);
  const updatePersonal = await Personal.findByIdAndUpdate(
    req.params.personalId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json({ success: true, data: updatePersonal });
};

const getCountPersonal = async (req, res) => {
  console.log("vo");
  const count = await Personal.countDocuments({});
  res.status(200).json({ success: true, data: count });
};

const getPointMost = async(req,res)=>{
  const Personals = await Personal.find();
  if(Personals.length == 0){
    return res.status(404);
  }
  let maxPoint=Personals[0];
  for(let i=0 ; i<Personals.length  ;i++ ){
    if(Personals[i].point>maxPoint){
      maxPoint=Personals[i];
    }
  }
  return res.status(200).json({ success:true, data : maxPoint});
}
module.exports = {
  getCreatePersonal,
  getPersonal,
  getPersonalByID,
  getDeletePersonalByID,
  getUpdatePersonalByID,
  getCountPersonal,
  getPointMost
};
