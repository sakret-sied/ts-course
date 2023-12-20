import Lead from './Classes/Lead.js';
import LeadService from './Classes/LeadService.js';
import NewLead from './Classes/NewLead.js';
import NotificationService from './Classes/NotificationService.js';

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
