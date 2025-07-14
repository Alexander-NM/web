import "../styling/contact-form.css"

export default function ContactForm({ handlerSubmit }) {
    // console.log(handlerSubmit)
    return (
        <form
            onSubmit={handlerSubmit}
            className="contact-form"
            action="action_page.php"
        >
            <h1>Contact us</h1>
            <p>Please fill in this form and submit.</p>
            <hr />
            <br />
            

            <label htmlFor="mtype">Message type</label>
            <select className="message-type" id="mtype" name="mtype">
                <option value="issue">Issue</option>
                <option value="suggestion">Suggestion</option>
                <option value="other">Other</option>
            </select>

            <div className="personal-info">
                <div className="input-container">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Your last name.."
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                </div>
            </div>

            <label htmlFor="subject">Subject</label>
            <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                required
            ></textarea>

            <button>Submit</button>
        </form>
    )
}
