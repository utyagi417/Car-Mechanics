import Contact from "../Models/Contact.model.js";


export const contactUs = async (req, res) => {
    const {fullName, email, subject, description} = req.body;
    try {
        let record  = await Contact.findOne({email: email});
        if(record){
            record.queries.push({subject: subject, description: description});
        }else{
            record = await Contact.create({
                fullName,
                email,
                queries: [{
                    subject: subject,
                    description: description
                }]
            });
        }
        await record.save();
        const updatedRecord  = await Contact.findOne({email: email});
        return res.status(200).json(updatedRecord);
    } catch (error) {
        console.log("Error in [Contact Us]", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}