# eyephoria-ui-app
This app will provide the various services for eyephoria clinic.

# admin
In the Eyephoria application, here are some common admin activities you might consider implementing, depending on the requirements and scope of your project:

1. Patient Management:
Adding, updating, or deleting patient records.

Viewing detailed patient histories, including prescriptions, consultations, and past appointments.

Managing patients' communication preferences (e.g., SMS or email notifications).

2. Appointment Management:
Scheduling, rescheduling, or canceling appointments.

Viewing and managing daily, weekly, or monthly appointment calendars.

Sending reminders for upcoming appointments to patients and doctors.

3. Doctor & Staff Management:
Adding and updating doctor profiles and availability.

Assigning or modifying roles for staff members (e.g., admin, receptionist).

Managing schedules for doctors and staff shifts.

5. Billing & Payments:
Generating and managing invoices for consultations or treatments.

Processing refunds or adjustments.

6. Viewing transaction histories and payment reports.

Inventory Management:
Tracking stocks of medicines, lenses, or clinic supplies.

Setting up alerts for low-stock items.

Managing orders for replenishment.

7. Reports & Analytics:
Generating reports on clinic performance, patient counts, revenue, etc.

Monitoring key metrics through a dashboard (e.g., most common conditions treated, busiest hours).

Analyzing patient demographics and trends.

8. System Configuration:
Managing application settings (e.g., clinic timings, services offered).

Configuring access permissions for different roles.

Adding new service offerings or updating their descriptions and prices.

9. Security & Compliance:
Ensuring data is securely stored and backed up.

Setting up and managing role-based access control for sensitive information.

Generating audit logs of activities within the application for accountability.

# Doctors:

here are some key activities that doctors can perform, ensuring a smooth workflow and effective patient care:

1. Patient Interaction:
View Patient Records: Access detailed patient histories, including past consultations, test results, and prescriptions.

Add Notes: Document observations or updates after consultations.

Prescribe Treatments: Generate and manage prescriptions for patients.

2. Appointment Management:
View Schedule: Access their daily, weekly, or monthly appointment calendar.

Manage Appointments: Mark appointments as completed, cancel appointments if needed, or request rescheduling.

3. Diagnostics and Reports:
Order Tests: Request diagnostic tests for patients and review their results.

Generate Reports: Provide consultation summaries or treatment plans for patients.

4. Communication:
Patient Communication: Send follow-up instructions or clarifications to patients through the platform.

Collaboration: Communicate with other doctors or staff members regarding shared cases.

5. Performance and Statistics:
View Statistics: Analyze personal performance metrics such as the number of patients seen, most common diagnoses, or treatment outcomes.

6. Feedback and Suggestions:
Submit Feedback: Suggest improvements for clinic operations or the application.

Review Feedback: Respond to patient feedback or questions, if applicable.

# consumers/patients :

Here are the activities that consumers/patients can perform in your Eyephoria application:

1. Account Management:

Register a new account and log in securely.

Update personal details like contact information and medical history.

2. Appointment Booking:

Schedule, reschedule, or cancel appointments with doctors.

View upcoming and past appointments.

3. Prescription Access:

View and download prescriptions provided by doctors.

Access past prescriptions for future reference.

4. Payment and Billing:

Make online payments for consultations or treatments.

View and download invoices or payment receipts.

5. Reports and Diagnostics:

Access diagnostic test results uploaded by the clinic.

Upload external reports, if needed, for doctors to review.

6. Communication:

Receive notifications and reminders for upcoming appointments.

Contact the clinic for inquiries or clarifications.

7. Feedback and Reviews:

Provide feedback on doctor consultations or overall clinic experience.

Rate services or suggest improvements.

8. Health Records Management:

Maintain a consolidated view of their health records within the platform.

Share records with doctors, if required, for better diagnosis.\




# Role Based Access Controll (RBAC):

incorporated OAuth or Auth0 into my Angular v15 app and define access rules, i have implemented role-based access control (RBAC) using guards and roles. Based on your application's structure (e.g., Consumers Module with components for Account Management, Appointment Booking, Payment Billing, etc.), here’s a list of potential access rules i have implemented:

1. #Admin Access Rules
Admins have elevated privileges and can perform system-wide activities. Admins should:

Manage Users: Access and edit user accounts.

View Reports: Access analytics and dashboards.

Manage Payments: View all payment records, process refunds, and generate reports.

Access All Modules: Have access to admin and consumer modules.

Routes to Secure:

/admin-dashboard

/consumers/account-management

/consumers/appointment-booking

/consumers/payment-billing

Auth0 Configuration:

Assign the role admin using Auth0's RBAC in user metadata.

Use a guard to validate the admin role before accessing these routes.

2. Doctor Access Rules
Doctors should:

View Appointments: View their patient bookings.

Access Patient Records: View assigned patient histories and diagnostics.

Manage Prescriptions: Add or edit prescriptions.

Routes to Secure:

/doctors/appointments

/doctors/patient-records

/doctors/manage-prescriptions

Auth0 Configuration:

Assign the role doctor.

Use a guard to ensure doctor access before navigating to these routes.

3. Patient (Consumer) Access Rules
Patients or consumers should:

Manage Accounts: Access personal account details.

Book Appointments: Create, update, or cancel appointments.

Make Payments: Process consultation or diagnostic payments.

Access Reports: View their medical reports, prescriptions, and payment histories.

Routes to Secure:

/consumers/account-management

/consumers/appointment-booking

/consumers/payment-billing

Auth0 Configuration:

Assign the role patient.

Validate patient role using a guard for these routes.

4. Guest Access Rules
Guest users (unauthenticated) should:

Only access the Home Page, About Page, or Login/Signup page.

Routes to Secure:

/home

/about

/login

Auth0 Configuration:

Do not assign roles (unauthenticated access).

Redirect any other path to /login.
