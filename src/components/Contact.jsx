
const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 flex justify-center items-center p-4"
        >
            <form
                action="https://getform.io/f/e6cb06b7-e654-4895-b9a2-02240d921f34"
                method="POST"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
                        Contact
                    </p>
                    <p className="text-gray-500 py-4">
                        Fill and submit the form below or send me an email -
                        peterkaranjagitz@gmail.com
                    </p>
                </div>
                <input
                    className="bg-transparent border rounded-md text-white p-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="my-4 p-2 bg-transparent border rounded-md text-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-transparent border p-2 rounded-md text-white"
                    name="message"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <button className="text-white border-2 hover:bg-gray-500 hover:border-gray-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md">
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
};

export default Contact;
