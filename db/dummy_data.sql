drop table if exists houses;

create table houses (
    id serial primary key,
    name text not null,
    address text not null,
    city text not null,
    state text not null,
    zipcode int not null,
    image_url text 
);

insert into houses (name, address, city, state, zipcode, image_url)
values('Beach house', '123 N Beach Rd', 'Long Beach', 'CA', 90712, 'https://pictures.escapia.com/GULFVR/72092/9922160672.jpg'),
('Lake cabin', '345 W Lake Lane', 'Priest Lake', 'ID', 83821, 'https://odis.homeaway.com/odis/listing/f196dfa6-862c-4385-8c46-68df889c74db.c10.jpg'),
('Residential house', '9874 S Cherry Ave', 'Spokane', 'WA', 99208, 'http://www.wabuildingsurveyors.com/images/house-plans-certified.jpg');

select * from houses;