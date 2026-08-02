//Need to update roomsStore: change setCurrenRoom to only take care of id and add prevRoom and nextRoom as separate functions
//Should use storedata currentroom to display data
//With currentroom its possible to get entity pages data and entities for each page.
//It should be possible to press prev/next to get to next entity page.
//if last entitypage current room should next room and the same if going backwards and youre on the first entitypage
//When exiting and going back to main page currentroom should be set to default again
//It should be possible to swipe
//Cool if swipe animation is implemented

function RoomPage() {
  return <div className="relative z-10">RoomPage</div>;
}

export default RoomPage;
