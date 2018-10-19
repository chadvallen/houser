alter table houses
add column pool boolean;

update houses
set pool = true;