## Chat-App

Chat App Created Using Next.js, Chakra UI & Firebase.

To run the project locally:

### Step 1:
Clone this repository.

### Step 2:
Install the required packages using this command:
```
npm i
```

### Step 3:
Run the project using:
```
npm run dev
```

To deploy the project on Firebase:
```
firebase deploy
```

### DB Schema:
Users: email, photo
Chats: timestamp, messages, users
Messages: timestamp, body

### Features:
1. Google User Authentication: Users are able to log in and log out using their Google accounts via Firebase Authentication.

2. Chat Rooms: Users are able to create, join, and leave chat rooms.

3. Real-Time Messaging: Messages sent by users should appear in the chat room in real time.

4. Message History: The chat application stores the history of messages for each chat room, which are visible to users when they join the room.

5. Private Messaging: Users are able to send private messages to other users.
