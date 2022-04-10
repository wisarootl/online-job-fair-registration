# Online Job Fair Registration

## Developers

- Julanan Jiwanantaprawat [@jjulanan](https://github.com/jjulanan/)
- Wisaroot Lertthaweedech [@wisarootl](https://github.com/wisarootl)

## Brief Description

Demo backend project for online job fair booking. This project is an assignment of Software Development Practice Class (2110503) at department of Computer Engineering, Chulalongkorn University.

## Table of Contents

- Problem Statement
  - Scope
  - Functional Requirements
  - Non-Functional Requirements
  - Constraints
- Digrams
  - ER Diagram
  - Class Diagram
  - [Sequence Diagrams](#sequence-diagrams) : [`Auth`](#auth), [`Company`](#company), [`Booking`](#booking)
- [Demo: Functional Requirements Verification](#demo-functional-requirements-verification)
  - [Testing as User](#testing-as-user) : [`Auth`](#auth-1), [`Company`](#company-1), [`Booking`](#booking-1)
  - [Testing as Admin](#testing-as-admin) : [`Auth`](#auth-2), [`Company`](#company-2), [`Booking`](#booking-2)
- Demo: Basic Security Testing
- Conclusion
- Developer's contribution

## Problem Statment

### Scope

### Functional Requirements

| Description                                                                                                                                                                                                                                                                                                                         |                                    Completed                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------: |
| 1. The system shall allow a user to register by specifying the name, telephone number, email, and password.                                                                                                                                                                                                                         |                               [✅](#test-user-01)                               |
| 2. After registration, the user becomes a registered user, and the system shall allow the user to log in to use the system by specifying the email and password. The system shall allow a registered user to log out.                                                                                                               |                     [✅](#test-user-05) [✅](#test-user-07)                     |
| 3. After login, the system shall allow the registered user to book up to 3 interview sessions by specifying the date (during May 10th-13th, 2022) and the preferred companies. The company list is also provided to the user. A company information includes the company name, address, website, description, and telephone number. | [✅](#test-user-10) [✅](#test-user-16) [✅](#test-user-17) [✅](#test-user-18) |
| 4. The system shall allow the registered user to view his interview session bookings.                                                                                                                                                                                                                                               |                                                                                 |
| 5. The system shall allow the registered user to edit his interview session bookings.                                                                                                                                                                                                                                               |                                                                                 |
| 6. The system shall allow the registered user to delete his interview session bookings.                                                                                                                                                                                                                                             |                                                                                 |
| 7. The system shall allow the admin to view any interview session bookings.                                                                                                                                                                                                                                                         |                                                                                 |
| 8. The system shall allow the admin to edit any interview session bookings.                                                                                                                                                                                                                                                         |                                                                                 |
| 9. The system shall allow the admin to delete any interview session bookings.                                                                                                                                                                                                                                                       |                                                                                 |
| 10. The system shall allow the admin to create/update/delete company. (addition from requirement in assignment)                                                                                                                                                                                                                     |                                                                                 |

### Non-Functional Requirements

### Constraints

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

#### Booking

## Demo: Functional Requirements Verification

### Testing as User

#### Auth

1. <a name="test-user-01"></a>Register
   - [Satisfied requirement #1](#functional-requirements)

![register](./doc_asset/function_test/registered_user/01_register.png)

2. <a name="test-user-02"></a>Register with duplicate telephone number

![register](./doc_asset/function_test/registered_user/02_register.png)

3. <a name="test-user-03"></a>Register without telephone number

![register](./doc_asset/function_test/registered_user/03_register.png)

4. <a name="test-user-04"></a>Register with wrong format telephone number

![register](./doc_asset/function_test/registered_user/04_register.png)

5. <a name="test-user-05"></a>Login
   - [Satisfied requirement #2](#functional-requirements)

![login](./doc_asset/function_test/registered_user/05_login.png)

6. <a name="test-user-06"></a>Get Me : after login

![getme](./doc_asset/function_test/registered_user/06_get_me.png)

7. <a name="test-user-07"></a>Logout
   - [Satisfied requirement #2](#functional-requirements)

![logout](./doc_asset/function_test/registered_user/07_logout.png)

8. <a name="test-user-08"></a>Get Me : after logout

![getme](./doc_asset/function_test/registered_user/08_getme.png)

#### Company

9. <a name="test-user-09"></a>Login : again

![login](./doc_asset/function_test/registered_user/09_login.png)

10. <a name="test-user-10"></a>Gat All Companies
    - [Satisfied requirement #3](#functional-requirements)

![get_all_company](./doc_asset/function_test/registered_user/10_get_all_companies.png)

11. <a name="test-user-11"></a>Gat All Companies : with query string

![get_all_company](./doc_asset/function_test/registered_user/11_get_all_companies.png)

12. <a name="test-user-12"></a>Gat Single Company

![get_single_company](./doc_asset/function_test/registered_user/12_get_single_company.png)

13. <a name="test-user-13"></a>Create Company

![create_company](./doc_asset/function_test/registered_user/13_create_company.png)

14. <a name="test-user-14"></a>Update Company

![update company](./doc_asset/function_test/registered_user/14_update_company.png)

15. <a name="test-user-15"></a>Delete Company

![delete company](./doc_asset/function_test/registered_user/15_delete_company.png)

#### Booking

16. <a name="test-user-16"></a>Add New Booking
    - [Satisfied requirement #3](#functional-requirements)

![add new company](./doc_asset/function_test/registered_user/16_add_new_booking.png)

17. <a name="test-user-17"></a>Add New Booking : with date out of range 10 - 13 May 2022
    - [Satisfied requirement #3](#functional-requirements)

![add new company](./doc_asset/function_test/registered_user/17_add_new_booking.png)

18. <a name="test-user-17"></a>Add New Booking : with >= 3 existed bookings of the user
    - [Satisfied requirement #3](#functional-requirements)

![add new company](./doc_asset/function_test/registered_user/18_add_new_booking.png)

19. <a name="test-user-19"></a>Get All Bookings
    - [Satisfied requirement #4](#functional-requirements)

![get_all_bookings](./doc_asset/function_test/registered_user/18_add_new_booking.png)

### Testing as Admin

#### Auth

#### Company

#### Booking

## Demo: Basic Security Testing

## Conclusion : Significant Change from VacQ project

## Developer's Contribution

<!-- ## Function testing with Postman

<a name="paragraph1"></a>

### Testing as user

#### Auth

![user register test](./doc_asset/function_test/user/01_register.png)

#### Company

#### Booking

### Testing as admin

#### Auth -->
