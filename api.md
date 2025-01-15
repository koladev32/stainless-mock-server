# Destinations

Types:

- <code><a href="./src/resources/destinations.ts">Destination</a></code>
- <code><a href="./src/resources/destinations.ts">DestinationListResponse</a></code>

Methods:

- <code title="post /destinations">client.destinations.<a href="./src/resources/destinations.ts">create</a>({ ...params }) -> Destination</code>
- <code title="get /destinations/{destination_id}">client.destinations.<a href="./src/resources/destinations.ts">retrieve</a>(destinationId) -> Destination</code>
- <code title="put /destinations/{destination_id}">client.destinations.<a href="./src/resources/destinations.ts">update</a>(destinationId, { ...params }) -> Destination</code>
- <code title="get /destinations">client.destinations.<a href="./src/resources/destinations.ts">list</a>({ ...params }) -> DestinationListResponse</code>
- <code title="delete /destinations/{destination_id}">client.destinations.<a href="./src/resources/destinations.ts">delete</a>(destinationId) -> void</code>

# General

Types:

- <code><a href="./src/resources/general.ts">GeneralGreetResponse</a></code>

Methods:

- <code title="get /">client.general.<a href="./src/resources/general.ts">greet</a>() -> unknown</code>
