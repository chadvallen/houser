update houses
set name = $1,
address = $2,
city = $3,
state = $4,
zipcode = $5,
image_url = $6
where id = $7;