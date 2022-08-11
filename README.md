# metacrud-mern
Basic template for MERN web apps intended to synthetize CRUD and navigation operations from server and client side.
<style>
.box{
    border: solid 1px black;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 11px;
    width: 100%;
    max-width: 600px;
  }
  
  .item{
    border: solid 1px lightgrey;
    padding: 10px;
    margin: 5px;
    display: flex;
    justify-content: space-between;
  }
</style>
<div className="box">
      <h1>Home</h1>

      <div className="item" style={{ flexDirection: "column" }}>
        <h4>What is this?</h4>        
          This is basic web MERN CRUD app that intents to deploy suchs features
          in abstract way where modularity and DRY
          principle may provide you with a very automated and conditional
          rendering.        
          <p><b>Define your schema, and get it done right away!</b></p>
      </div>

      <div className="item" style={{ flexDirection: "column" }}>
        <h4>Why do I explore this options?</h4>
          Again again we face web apps whoose
          fundamentals features are just CRUD operations, and whoose
          navigation logic begins with a "list-of-items" that proceeds with a
          "detail-item-view", where you could interact with an element, edit it
          or delete it.
      </div>
      <div className="item" style={{ flexDirection: "column" }}>
        <h4>My motivations</h4>
        I was tired to write the same code for each time i needed to fetch, put, delete or edit some data, as I was also tired 
        of write multiple list and detail components for each entity I was dealing with. Also jaded after write just another form, input tags, handlers and so on.
        So, this is what I proposed to do:
        <p><b>Write the most reusable, abstracted, automated and schematized logic components for basics and fundamentals processes related to: </b></p>
          <ul>
            <li>CRUD operations, from client and server both sides</li>
            <li>Navigation from list to item, disregarding the type of entity</li>
            <li>Forms rendering and validation</li>
          </ul>        
        </div>

        <div className="item" style={{ flexDirection: "column" }}>
          <h4>How do I approach it?</h4>
        </div>

        <div className="item" style={{ flexDirection: "column" }}>
          <h4>Key Components</h4>
        </div>

        <div className="item" style={{ flexDirection: "column" }}>
          <h4>Key Concepts</h4>
        </div>

        <div className="item" style={{ flexDirection: "column" }}>
          <h4>Limitations</h4>
        </div>

        <div className="item" style={{ flexDirection: "column" }}>
          <h4>The Stack</h4>
        </div> 
    </div>
