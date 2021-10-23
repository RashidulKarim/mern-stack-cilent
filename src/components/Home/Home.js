import React from 'react';

const Home = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'60vh'}}>
           <div style={{width: "50%"}}>
           <h2 style={{textAlign:'center', marginBottom:'20px'}}>Welcome to mern project</h2>
            <p>This is a mern project. you can add product which is saved in the mongodb database and also can see all added product on products page. products page data is dynamically came from mongodb data base.. Thank you. </p>
           </div>
        </div>
    );
};

export default Home;