# Online Job Fair Registration

## Developers

- Julanan Jiwanantaprawat [@jjulanan](https://github.com/jjulanan/)
- Wisaroot Lertthaweedech [@wisarootl](https://github.com/wisarootl)

## Brief Description

Demo backend project for online job fair registration. This project is an assignment of Software Development Practice Class (2110503) at department of Computer Engineering, Chulalongkorn University.

## Table of Contents

- [Problem Statement](#problem-statment)
  - [Scope](#scope)
  - [Functional Requirements](#functional-requirements)
  - [Non-Functional Requirements](#non-functional-requirements)
  - [Constraints](#constraints)
- [Digrams](#diagrams)
  - [ER Diagram](#er-diagram)
  - [Class Diagram](#class-diagram)
  - [Sequence Diagrams](#sequence-diagrams) : [`Auth`](#auth), [`Company`](#company), [`Booking`](#booking)
- [Demo: Functional Requirements Verification](#demo-functional-requirements-verification)
  - [Testing as User](#testing-as-user) : [`Auth`](#auth-1), [`Company`](#company-1), [`Booking`](#booking-1)
  - [Testing as Admin](#testing-as-admin) : [`Auth`](#auth-2), [`Company`](#company-2), [`Booking`](#booking-2)
- [Demo: Basic Security Testing](#demo-basic-security-testing)
- [Conclusion : Significant Change from VacQ Project](#conclusion--significant-change-from-vacq-project)
- [Developer's contribution](#developers-contribution)

## Problem Statment

### Scope

### Functional Requirements

| Description                                                                                                                                                                                                                                                                                                                         |                                    Completed                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------: |
| 1. The system shall allow a user to register by specifying the name, telephone number, email, and password.                                                                                                                                                                                                                         |                               [✅](#test-user-01)                               |
| 2. After registration, the user becomes a registered user, and the system shall allow the user to log in to use the system by specifying the email and password. The system shall allow a registered user to log out.                                                                                                               |                     [✅](#test-user-05) [✅](#test-user-07)                     |
| 3. After login, the system shall allow the registered user to book up to 3 interview sessions by specifying the date (during May 10th-13th, 2022) and the preferred companies. The company list is also provided to the user. A company information includes the company name, address, website, description, and telephone number. | [✅](#test-user-10) [✅](#test-user-16) [✅](#test-user-17) [✅](#test-user-18) |
| 4. The system shall allow the registered user to view his interview session bookings.                                                                                                                                                                                                                                               |                     [✅](#test-user-19) [✅](#test-user-21)                     |
| 5. The system shall allow the registered user to edit his interview session bookings.                                                                                                                                                                                                                                               |                               [✅](#test-user-24)                               |
| 6. The system shall allow the registered user to delete his interview session bookings.                                                                                                                                                                                                                                             |                               [✅](#test-user-20)                               |
| 7. The system shall allow the admin to view any interview session bookings.                                                                                                                                                                                                                                                         |                              [✅](#test-admin-06)                               |
| 8. The system shall allow the admin to edit any interview session bookings.                                                                                                                                                                                                                                                         |                              [✅](#test-admin-07)                               |
| 9. The system shall allow the admin to delete any interview session bookings.                                                                                                                                                                                                                                                       |                              [✅](#test-admin-08)                               |
| 10. The system shall allow the admin to create company. `😀addition from the requirements in assignment`                                                                                                                                                                                                                            |                              [✅](#test-admin-02)                               |
| 11. The system shall allow the admin to update company. `😀addition from the requirements in assignment`                                                                                                                                                                                                                            |                              [✅](#test-admin-03)                               |
| 12. The system shall allow the admin to delete company. `😀addition from the requirements in assignment`                                                                                                                                                                                                                            |                              [✅](#test-admin-04)                               |

### Non-Functional Requirements

1. Security:

   - The system shall authenticate users using username-password.
   - The system shall be able to keep user’s transactions confidential.

2. Performance:

   - The system shall response to a request in 3 seconds.

3. Usability:
   - The system shall be used and test via Postman.

### Constraints

1. The system shall be a web API.
2. The frontend part of the application is not required.
3. The development team shall develop the backend system as REST APIs.
4. The database system can be either MongoDB Atlas or MySQL.

## Diagrams

### ER Diagram

![er diagram](./doc_asset/diagrams/er_diagram.svg)

[full size image](./doc_asset/diagrams/er_diagram.svg)

### Class Diagram

![class diagram](./doc_asset/diagrams/class_diagram.svg)
[full size image](./doc_asset/diagrams/class_diagram.svg)

### Sequence Diagrams

#### Auth

- Get Me

  ![get me](./doc_asset/diagrams/squence_diagrams/auth/get_me.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/auth/get_me.svg)

- Login

  ![login](./doc_asset/diagrams/squence_diagrams/auth/login.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/auth/get_me.svg)

- Logout

  ![logout](./doc_asset/diagrams/squence_diagrams/auth/logout.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/auth/get_me.svg)

- Register

  ![register](./doc_asset/diagrams/squence_diagrams/auth/register.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/auth/get_me.svg)

#### Company

- Create New Company

  ![Create New Company](./doc_asset/diagrams/squence_diagrams/company/create_new_company.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/company/create_new_company.svg)

- Delete Single Company

  ![Delete Single Company](./doc_asset/diagrams/squence_diagrams/company/delete_single_company.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/company/delete_single_company.svg)

- Get All Companies

  ![Get All Companies](./doc_asset/diagrams/squence_diagrams/company/get_all_companies.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/company/get_all_companies.svg)

- Get Single Company

  ![Get Single Company](./doc_asset/diagrams/squence_diagrams/company/get_single_company.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/company/get_single_company.svg)

- Update Single Company

  ![Update Single Company](./doc_asset/diagrams/squence_diagrams/company/update_single_company.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/company/update_single_company.svg)

#### Booking

- Add New Booking

  ![Add New Booking](./doc_asset/diagrams/squence_diagrams/booking/add_new_booking.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/booking/add_new_booking.svg)

- Delete Single Booking

  ![Delete Single Booking](./doc_asset/diagrams/squence_diagrams/booking/delete_single_bookings.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/booking/delete_single_bookings.svg)

- Get All Bookings

  ![Get All Bookings](./doc_asset/diagrams/squence_diagrams/booking/get_all_bookings.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/booking/get_all_bookings.svg)

- Get Single Booking

  ![Get Single Booking](./doc_asset/diagrams/squence_diagrams/booking/get_single_booking.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/booking/get_single_booking.svg)

- Update Single Booking

  ![Update Single Booking](./doc_asset/diagrams/squence_diagrams/booking/update_single_booking.svg)

  [full size image](./doc_asset/diagrams/squence_diagrams/booking/update_single_booking.svg)

## Demo: Functional Requirements Verification

### Testing as User

#### Auth

1. <a name="test-user-01"></a>Register
   - [satisfied requirement #1](#functional-requirements)

![register](./doc_asset/function_test/registered_user/01_register.png)

2. <a name="test-user-02"></a>Register with duplicate telephone number

![register](./doc_asset/function_test/registered_user/02_register.png)

3. <a name="test-user-03"></a>Register without telephone number

![register](./doc_asset/function_test/registered_user/03_register.png)

4. <a name="test-user-04"></a>Register with wrong format telephone number

![register](./doc_asset/function_test/registered_user/04_register.png)

5. <a name="test-user-05"></a>Login
   - [satisfied requirement #2](#functional-requirements)

![login](./doc_asset/function_test/registered_user/05_login.png)

6. <a name="test-user-06"></a>Get Me : after login

![getme](./doc_asset/function_test/registered_user/06_get_me.png)

7. <a name="test-user-07"></a>Logout
   - [satisfied requirement #2](#functional-requirements)

![logout](./doc_asset/function_test/registered_user/07_logout.png)

8. <a name="test-user-08"></a>Get Me : after logout

![getme](./doc_asset/function_test/registered_user/08_getme.png)

#### Company

9. <a name="test-user-09"></a>Login : again

![login](./doc_asset/function_test/registered_user/09_login.png)

10. <a name="test-user-10"></a>Gat All Companies
    - [satisfied requirement #3](#functional-requirements)

![get_all_company](./doc_asset/function_test/registered_user/10_get_all_companies.png)

11. <a name="test-user-11"></a>Gat All Companies : with query string

![get_all_company](./doc_asset/function_test/registered_user/11_get_all_companies.png)

12. <a name="test-user-12"></a>Gat Single Company

![get_single_company](./doc_asset/function_test/registered_user/12_get_single_company.png)

13. <a name="test-user-13"></a>Create Company

![create_company](./doc_asset/function_test/registered_user/13_create_company.png)

14. <a name="test-user-14"></a>Update Company

![update_company](./doc_asset/function_test/registered_user/14_update_company.png)

15. <a name="test-user-15"></a>Delete Company

![delete_company](./doc_asset/function_test/registered_user/15_delete_company.png)

#### Booking

16. <a name="test-user-16"></a>Add New Booking
    - [satisfied requirement #3](#functional-requirements)

![add_new_company](./doc_asset/function_test/registered_user/16_add_new_booking.png)

17. <a name="test-user-17"></a>Add New Booking : with date out of range 10 - 13 May 2022
    - [satisfied requirement #3](#functional-requirements)

![add_new_company](./doc_asset/function_test/registered_user/17_add_new_booking.png)

18. <a name="test-user-18"></a>Add New Booking : with >= 3 existed bookings of the user
    - [satisfied requirement #3](#functional-requirements)

![add_new_company](./doc_asset/function_test/registered_user/18_add_new_booking.png)

19. <a name="test-user-19"></a>Get All Bookings
    - get only the bookings of the user themself
    - [satisfied requirement #4](#functional-requirements)

![get_all_bookings](./doc_asset/function_test/registered_user/19_get_all_bookings.png)

20. <a name="test-user-20"></a>Delete Single Booking : of the user themself
    - [satisfied requirement #6](#functional-requirements)

![delete_single_booking](./doc_asset/function_test/registered_user/20_delete_booking.png)

21. <a name="test-user-21"></a>Delete Single Booking : of another user

![delete_single_booking](./doc_asset/function_test/registered_user/21_delete_booking.png)

22. <a name="test-user-22"></a>Get Single Booking : of the user themself
    - [satisfied requirement #4](#functional-requirements)

![get_single_booking](./doc_asset/function_test/registered_user/22_get_single_booking.png)

23. <a name="test-user-23"></a>Get Single Booking : of another user

![get_single_booking](./doc_asset/function_test/registered_user/23_get_single_booking.png)

24. <a name="test-user-24"></a>Update Single Booking : of the user themself
    - [satisfied requirement #5](#functional-requirements)

![update_single_booking](./doc_asset/function_test/registered_user/24_update_booking.png)

25. <a name="test-user-25"></a>Update Single Booking : of another user

![update_single_booking](./doc_asset/function_test/registered_user/25_update_booking.png)

### Testing as Admin

#### Auth

1. <a name="test-admin-01"></a>Register : as a admin

![register](./doc_asset/function_test/admin/01_register.png)

#### Company

2. <a name="test-admin-02"></a>Create New Company
   - [satisfied requirement #10](#functional-requirements)

![create_new_booking](./doc_asset/function_test/admin/02_create_new_company.png)

3. <a name="test-admin-03"></a>Update Company
   - [satisfied requirement #11](#functional-requirements)

![update_booking](./doc_asset/function_test/admin/03_update_company.png)

4. <a name="test-admin-04"></a>Delete Company
   - [satisfied requirement #12](#functional-requirements)

![delete_booking](./doc_asset/function_test/admin/03_update_company.png)

#### Booking

5. <a name="test-admin-05"></a>Get All Bookings
   - get all bookings in the systems including bookings of other users

![get_all_bookings](./doc_asset/function_test/admin/05_get_all_bookings.png)

6. <a name="test-admin-06"></a>Get Single Booking : of another user
   - [satisfied requirement #7](#functional-requirements)

![get_single_booking](./doc_asset/function_test/admin/06_get_single_booking.png)

7. <a name="test-admin-07"></a>Update Single Booking : of another user
   - [satisfied requirement #8](#functional-requirements)

![update_single_booking](./doc_asset/function_test/admin/07_update_booking.png)

8. <a name="test-admin-08"></a>Delete Single Booking : of another user
   - [satisfied requirement #9](#functional-requirements)

![delete_single_booking](./doc_asset/function_test/admin/08_delete_booking.png)

## Demo: Basic Security Testing

## Conclusion : Significant Change from VacQ project

## Developer's Contribution
