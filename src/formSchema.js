import * as Yup from 'yup'

const formSchema = Yup.object().shape({
name: Yup
.string()
.trim()
.required("All dogs have a name!")
.min(1, "We doubt your name is less than 1 character long..."),
email: Yup
.string()
.email("You must have a valid email address, no AOL here.")
.required("Any dog must have an email address."),
role: Yup
.string()
.oneOf(["Barista"], "A Barista is all we're looking for, sorry!"),
breed: Yup
.string()
.trim()
.required("We don't care what you're made of, but you have to tell us.")
.min(4, "We doubt your breed-name is less than 4 character long..."),
temperament: Yup
.string()
.required("Please tell us about yourself!")
.min(20, "We must know more..."),
chew: Yup
.boolean().oneOf([true, false], "I FIZED ITTTITITITIT")
})

export default formSchema