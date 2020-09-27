# Doc Api


## User SignUp Post

from:
username, password, roles(optional default voter)

```bash
https://voting-app-calpub.herokuapp.com/auth/signup
```

## User SignIn Post

from:
username, password. result JWT Token No Expires

```bash
https://voting-app-calpub.herokuapp.com/auth/signin
```

## Calbup Add (user role admin) Post

from:
namaCabup, namaWaCabup, visi, misi

```bash
https://voting-app-calpub.herokuapp.com/calpub/create

```

## Calbup Edit (user role admin) Patch

from:
namaCabup, namaWaCabup, visi, misi

```bash
https://voting-app-calpub.herokuapp.com/calpub/:id

```

## Calbup Delete (user role admin) Delete


```bash
https://voting-app-calpub.herokuapp.com/calpub/:id

```


## Calbup Get (user role admin, voter) Get


```bash
https://voting-app-calpub.herokuapp.com/calpub

```

## Vote Calbup (user role voter) Post
from : uuid, idCalbup

uuid is Primary Key


```bash
https://voting-app-calpub.herokuapp.com/voter

```

