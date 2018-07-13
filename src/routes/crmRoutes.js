import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContactWithID, 
    deleteContactWithID
} from "../controllers/crmController";

const routes = (app) => {
    app.route("/contacts")
        // get all contacts
        .get((req, res, next) => {
            // middleware
            console.log(`Request from ${req.originalUrl}`);
            console.log(`Request type ${req.method}`);
            next();
        }, getContacts)
        .post(addNewContact);

    app.route('/contacts/:contactID')
        // get specific contact
        .get(getContactWithID)
        //Update specific contact
        .put(updateContactWithID)
        .delete(deleteContactWithID);
}

export default routes;