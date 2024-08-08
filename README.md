### Fantasy Crypto Coin Exchange Simulator Specifications

**Objective:**  
The app will display a list of real-time prices from an API and allow users to log in, buy, or sell coins. The app will simulate market fluctuations through general events and individual events for each coin.

---

#### Front-End: 
- **Framework:** Next.js

---

#### Back-End:
- **API Base URL:** `http://localhost:9001/api`

---

### API Endpoints:

#### Coins
1. **Get All Coins:**
   - **URL:** `/coins`
   - **Method:** GET
   - **Response:**
     ```json
     [
         {
             "coin_id": 9,
             "name": "Cybercore",
             "symbol": "CYB",
             "current_price": "1.05",
             "supply": "6000",
             "market_cap": "12000",
             "date_added": "2024-03-22T00:00:00.000Z",
             "description": "A security-focused cryptocurrency, prioritizing safe and encrypted transactions."
         },
         ...
         {
             "marketTotal": "1000000",
             "currentEvent": {
                 "type": "bull",
                 "start_time": "Thursday, April 4, 2024 2:56 PM",
                 "end_time": "Thursday, April 4, 2024 3:05 PM"
             }
         }
     ]
     ```

2. **Get a Single Coin by ID:**
   - **URL:** `/coins/:id`
   - **Method:** GET
   - **Response:**
     ```json
     {
         "coin_id": 1,
         "name": "Cybercore",
         "symbol": "CYB",
         "current_price": "1.05",
         "supply": "6000",
         "market_cap": "12000",
         "date_added": "2024-03-22T00:00:00.000Z",
         "description": "A security-focused cryptocurrency, prioritizing safe and encrypted transactions.",
         "priceHistory": [
             {
                 "history_id": 50950,
                 "coin_id": 1,
                 "price": "11.6049",
                 "timestamp": "2024-07-30T12:36:28.929Z"
             },
             ...
         ],
         "allTimeHigh": "15.00",
         "allTimeLow": "1.00",
         "medianAverage": "2.50",
         "meanAverage": "3.00",
         "last5minsValue": "1.05",
         "percentage5mins": "0.00%",
         "last10minsValue": "1.05",
         "percentage10mins": "0.00%",
         "last30minsValue": "1.05",
         "percentage30mins": "0.00%",
         "eventDuration": "10 mins 30 secs",
         "eventType": "Technological Breakthrough",
         "coinEventPositive": true,
         "eventImpact": "high"
     }
     ```

3. **Get Coin Price History:**
   - **URL:** `/coins/:id/priceHistory`
   - **Method:** GET
   - **Response:**
     ```json
     [
         {
             "history_id": 50950,
             "coin_id": 1,
             "price": "11.6049",
             "timestamp": "2024-07-30T12:36:28.929Z"
         },
         ...
     ]
     ```

4. **Create a New Coin:**
   - **URL:** `/coins`
   - **Method:** POST
   - **Request Body:**
     ```json
     {
         "name": "NewCoin",
         "symbol": "NCN",
         "current_price": "1.50",
         "supply": "10000",
         "market_cap": "15000",
         "description": "A new cryptocurrency for the future."
     }
     ```
   - **Response:**
     ```json
     {
         "coin_id": 10,
         "name": "NewCoin",
         "symbol": "NCN",
         "current_price": "1.50",
         "supply": "10000",
         "market_cap": "15000",
         "date_added": "2024-07-30T12:00:00.000Z",
         "description": "A new cryptocurrency for the future."
     }
     ```

5. **Update an Existing Coin:**
   - **URL:** `/coins/:id`
   - **Method:** PUT
   - **Request Body:**
     ```json
     {
         "name": "UpdatedCoin",
         "symbol": "UPC",
         "current_price": "2.00",
         "supply": "8000",
         "market_cap": "16000",
         "description": "An updated description for the coin."
     }
     ```
   - **Response:**
     ```json
     {
         "coin_id": 1,
         "name": "UpdatedCoin",
         "symbol": "UPC",
         "current_price": "2.00",
         "supply": "8000",
         "market_cap": "16000",
         "date_added": "2024-03-22T00:00:00.000Z",
         "description": "An updated description for the coin."
     }
     ```

6. **Delete a Coin:**
   - **URL:** `/coins/:id`
   - **Method:** DELETE
   - **Response:** 204 No Content

7. **Update Coin Price:**
   - **URL:** `/coins/:id/setprice`
   - **Method:** PATCH
   - **Request Body:**
     ```json
     {
         "newPrice": "2.50"
     }
     ```
   - **Response:**
     ```json
     {
         "coin_id": 1,
         "name": "Cybercore",
         "symbol": "CYB",
         "current_price": "2.50",
         "supply": "6000",
         "market_cap": "15000",
         "date_added": "2024-03-22T00:00:00.000Z",
         "description": "A security-focused cryptocurrency, prioritizing safe and encrypted transactions."
     }
     ```

8. **Get Events for a Specific Coin:**
   - **URL:** `/coins/:id/events`
   - **Method:** GET
   - **Response:**
     ```json
     [
         {
             "event_id": 3472,
             "coin_id": 1,
             "type": "Internal Conflicts",
             "is_positive": false,
             "impact": "medium",
             "start_time": "Tuesday, July 30, 2024 2:03 PM",
             "end_time": "Tuesday, July 30, 2024 2:15 PM",
             "duration": "12 minutes"
         },
         ...
     ]
     ```

9. **Get Coin Price:**
   - **URL:** `/coins/:id/getprice`
   - **Method:** GET
   - **Response:**
     ```json
     {
         "current_price": "2.50"
     }
     ```

#### Market
1. **Get General Market Events:**
   - **URL:** `/events`
   - **Method:** GET
   - **Response:**
     ```json
     [
         {
             "event_id": 45,
             "type": "bull",
             "start_time": "Thursday, April 4, 2024 2:56 PM",
             "end_time": "Thursday, April 4, 2024 3:05 PM",
             "details": null,
             "duration": 9
         },
         ...
     ]
     ```

2. **Get Market Statistics:**
   - **URL:** `/stats`
   - **Method:** GET
   - **Response:**
     ```json
     {
         "event": {
             "type": "bear",
             "start_time": "Tuesday, July 30, 2024 2:08 PM",
             "end_time": "Tuesday, July 30, 2024 2:13 PM",
             "details": null,
             "time_left": 0.0509
         },
         "marketValue": "13.78",
         "last5minsMarketValue": "15.03",
         "percentage5mins": "-8.31%",
         "last10minsMarketValue": "16.51",
         "percentage10mins": "-16.55%",
         "last30minsMarketValue": "72.13",
         "percentage30mins": "-80.90%",
         "top3Coins": [
             {
                 "name": "BlockNation",
                 "price": 2.49
             },
             ...
         ],
         "allTimeHigh": 99.79
     }
     ```

#### Portfolio
1. **Get User Portfolio:**
   - **URL:** `/portfolios/:user_id`
   - **Method:** GET
   - **Response:**
     ```json
     [
         {
             "portfolio_id": 5,
             "user_id": 5,
             "coin_id": 4,
             "amount": "6.00000000",
             "name": "NovaCash",
             "current_price": "2.72"
         },
         {
             "totalValue": 16

.32
         }
     ]
     ```

#### User Routes
1. **Register User:**
   - **URL:** `/users/register`
   - **Method:** POST
   - **Request Body:**
     ```json
     {
         "username": "newuser",
         "email": "newuser@example.com",
         "password": "password123"
     }
     ```
   - **Response:**
     ```json
     {
         "user_id": 1,
         "username": "newuser",
         "email": "newuser@example.com"
     }
     ```

2. **Login User:**
   - **URL:** `/users/login`
   - **Method:** POST
   - **Request Body:**
     ```json
     {
         "username": "existinguser",
         "password": "password123"
     }
     ```
   - **Response:**
     ```json
     {
         "user_id": 1,
         "username": "existinguser",
         "email": "existinguser@example.com"
     }
     ```

3. **Logout User:**
   - **URL:** `/users/logout`
   - **Method:** POST

4. **Get User Funds:**
   - **URL:** `/users/getFunds/:user_id`
   - **Method:** GET
   - **Response:**
     ```json
     {
         "user_id": 5,
         "funds": "1000.00"
     }
     ```

5. **Set User Funds:**
   - **URL:** `/users/setFunds/:user_id`
   - **Method:** PUT
   - **Request Body:**
     ```json
     {
         "funds": "1500.00"
     }
     ```

6. **Delete User:**
   - **URL:** `/users/:user_id`
   - **Method:** DELETE

7. **Get All Users:**
   - **URL:** `/users`
   - **Method:** GET
   - **Response:**
     ```json
     [
         {
             "user_id": 1,
             "username": "user1",
             "email": "user1@example.com"
         },
         ...
     ]
     ```

8. **Get User by ID:**
   - **URL:** `/users/:user_id`
   - **Method:** GET
   - **Response:**
     ```json
     {
         "user_id": 1,
         "username": "user1",
         "email": "user1@example.com"
     }
     ```

#### Transaction Routes
1. **Get All Transactions:**
   - **URL:** `/transactions`
   - **Method:** GET
   - **Response:**
     ```json
     [
         {
             "trans_id": 1,
             "user_id": 5,
             "coin_id": 4,
             "type": "buy",
             "amount": "10.00000000",
             "price": "2.50",
             "timestamp": "2024-07-30T12:00:00.000Z"
         },
         ...
     ]
     ```

2. **Get Transactions by User ID:**
   - **URL:** `/transactions/:user_id`
   - **Method:** GET
   - **Response:**
     ```json
     [
         {
             "trans_id": 1,
             "user_id": 5,
             "coin_id": 4,
             "type": "buy",
             "amount": "10.00000000",
             "price": "2.50",
             "timestamp": "2024-07-30T12:00:00.000Z"
         },
         ...
     ]
     ```

3. **Create a New Transaction:**
   - **URL:** `/transactions`
   - **Method:** POST
   - **Request Body:**
     ```json
     {
         "user_id": 5,
         "coin_id": 4,
         "type": "buy",
         "amount": "10.00000000",
         "price": "2.50"
     }
     ```
   - **Response:**
     ```json
     {
         "trans_id": 3,
         "user_id": 5,
         "coin_id": 4,
         "type": "buy",
         "amount": "10.00000000",
         "price": "2.50",
         "timestamp": "2024-07-30T14:00:00.000Z"
     }
     ```

4. **Delete a Transaction:**
   - **URL:** `/transactions/:trans_id`
   - **Method:** DELETE

---

### Front-End Pages:
1. **Coins Listings Page**
2. **Buy Form**
3. **Sell Form**
4. **Portfolio Page**
5. **Coin Details Page**
   - Display detailed information about a selected coin.
   - Include a small price history graph.

---

### Header:
- Display user's name and their overall balance.

---
