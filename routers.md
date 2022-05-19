## Admin(get, post)

    domain/admin/users

    body = {
            username: string, >=8,
            password: string, >=8,
            name: string
    }

# API

domain/API/

## user

        /

### auth (post)

        /auth/login {username, password}

### products (get, post)

        /products?fromDate=...&endDate=...
        /products {}

### alarm (get, post)

        /alarms {}

### status(get, put)

        /status {}
