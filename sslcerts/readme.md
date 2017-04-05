You'll have to generate your own keys...

I used openssl: https://www.openssl.org/

openssl genrsa -out localhost.key 2048
openssl req -new -x509 -key localhost.key -out localhost.crt -days 3650 -subj /CN=localhost