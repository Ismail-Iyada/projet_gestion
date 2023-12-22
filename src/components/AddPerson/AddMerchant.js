
function AddMerchant () {

    return (
            <section className="addMerchantM" >
                <h2 style={{color:"#497174", textAlign:"center", fontSize:"125%", marginBottom:"6vh"}}>Add merchant information</h2>
                    <form className="addMerchant" /*onSubmit={formSubmit}*/>
                        <div className="nameInput">
                            <input
                                className="formElement splitFlex"
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                required
                                /*onChange={(e) => setFirstName(e.target.value)}*//>

                            <input
                                className="formElement splitFlex"
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Second Name"
                                required
                                /*onChange={(e) => setLastName(e.target.value)}*//>
                        </div>
                        <input
                            className="formElement"
                            id="CIN"
                            name="CIN"
                            type="text"
                            pattern="[A-z]{2}[0-9]{6}"
                            placeholder="ID Card"
                            required
                            /*onChange={(e) => setCIN(e.target.value)}*//>

                        <input
                            className="formElement"
                            id="birthDate"
                            name="birthDate"
                            type="date"
                            placeholder="Date of Birth"
                            required
                            /*min={new Date().toISOString().split("T")[0]}*/ /*onChange={(e) => setBirthDate(e.target.value)}*//>

                        <input
                            className="formElement"
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            placeholder="Phone +1"
                            required
                            //pattern="^(\\+212|0)\\d{9}$"
                            // onChange={(event) => setPhoneNumber(event.target.value)}
                        />

                        <input
                            className="formElement"
                            id="address"
                            name="address"
                            type="text"
                            placeholder="Address"
                            required
                            // onChange={(event) => setAddress(event.target.value)}
                        />

                        <button className="submitForm" type="submit">Add</button>
                    </form>
            </section>
    );
};

export default AddMerchant;