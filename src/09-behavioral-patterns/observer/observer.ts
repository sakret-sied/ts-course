import Lead from './classes/lead.js';
import LeadService from './classes/lead-service.js';
import NewLead from './classes/new-lead.js';
import NotificationService from './classes/notification-service.js';

const subject = new NewLead();
subject.state = new Lead('Anton', '0000');
const s1 = new NotificationService();
const s2 = new LeadService();

subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.detach(s2);
subject.notify();
