<<<<<<< HEAD
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import FlatList from 'flatlist-react';
import app from '../firebase';
const db = getFirestore(app);

const Videos = () => {

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const videosCol = collection(db, 'videos');
    const videoSnapshot = await getDocs(videosCol);
    const videoList = videoSnapshot.docs.map(doc => doc.data());
    setAllData(videoList);
    console.log("All Data", videoList);
  }

  const renderPerson = (item, idx) => {
    return (
      <div class="col-4 my-3" key={idx}>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src={item.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div></div>
        <blockquote class="blockquote text-center">
          <p class="mb-0 h1">{item.name}</p>
          {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">{item.name}</cite></footer> */}
        </blockquote>
      </div>
      // <li key={idx}>
      //   <a href={item.link}>{item.name}</a>
      //   <div class="embed-responsive embed-responsive-21by9">
      //     <iframe class="embed-responsive-item" src={item.link}></iframe>
      //   </div>
      //   {/* <iframe width="560" height="315" src={item.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      //   {/* <b>{item.name}</b> */}
      //   {/* <b>{person.firstName} {person.lastName}</b> (<span>{person.info.age}</span>) */}
      // </li>
    );
  }

  return (
    // <h1>You can write your blogs!</h1>
    <div class="row">
      <FlatList
        list={allData}
        renderItem={renderPerson}
        renderWhenEmpty={() => <div>List is empty!</div>}
      // sortBy={["firstName", {key: "lastName", descending: true}]}
      // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
      />
      {/* <div class="col-4">e</div>
      <div class="col-4">l</div>
      <div class="col-4">l</div> */}
    </div>
    // <ul>
    //     <FlatList
    //       list={allData}
    //       renderItem={renderPerson}
    //       renderWhenEmpty={() => <div>List is empty!</div>}
    //       // sortBy={["firstName", {key: "lastName", descending: true}]}
    //       // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
    //     />
    // </ul>
  );
};

=======

import React from 'react';
  
const Videos = () => {
  return (
    <h1>You can write your blogs!</h1>
  );
};
  
>>>>>>> 82de65031fc5b5020f8ee0bef0da39f57ffcc239
export default Videos;