import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContactWithID, 
    deleteContactWithID
} from "../controllers/crmController";

import { 
    login, 
    register, 
    loginRequired 
} from '../controllers/userController';

const routes = (app) => {
    app.route("/contacts")
        // get all contacts
        .get((req, res, next) => {
            // middleware
            console.log(`Request from ${req.originalUrl}`);
            console.log(`Request type ${req.method}`);
            next();
        }, loginRequired, getContacts)
        .post(loginRequired, addNewContact);

    app.route('/contacts/:contactID')
        // get specific contact
        .get(loginRequired, getContactWithID)
        //Update specific contact
        .put(loginRequired, updateContactWithID)
        .delete(loginRequired, deleteContactWithID);
    
    app.route('/auth/register')
        .post(register);
    
     app.route('/auth/login')
        .post(login);   
}

export default routes;