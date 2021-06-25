import styled from 'styled-components';
import image from '../../assets/img/landscape.webp'

export const StyledDiv = styled.div`

#background {
  margin-top: 65px;
	height: 871px;
	display: flex;
	justify-content: center;
	
	
	margin: 0px 0px 0px 0px;
	background-image: url(${image});
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
}


#cards {
	display: flex;
	justify-content: center;
	
	
}


body {
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  margin: 20px;
}

img {
  width: 120px;
  margin: auto;
  
  display: flex;
  justify-content: center;
  &:hover {
	transform: scaleX(-1);
}
 
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 400;
  
}

.card {
  &:hover {
    box-shadow: 6px 0 black, -6px 0 black, 0 -6px black, 0 6px black;
   
  }
  
  margin-top: 210px;
  width: 300px;
  height: 500px;
  padding: 1em;
  border-radius: 2px;
  
  background: #ddd;
  text-align: center;
  background: linear-gradient(
	50deg,
	rgba(255, 222, 0, 1) 34%,
	rgba(232, 255, 153, 1) 83%
  );
  .card__type {
	background-color: #a31313;
  }

  &__caption {
    background-color: rgba(#ffffff, 0.65);
    padding: 1em;
    position: relative;
    border-radius: 0 0 3px 3px;
  }
  &__image-container {
	 
	margin: 0px;
	background-color: white;
	border-radius: 100%;
	width: 100px;
	height: 100px;
	box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.4);
	
  }

  &__type {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 15px 2px 0px 15px;
	padding: 3px 3px 3px 3px;
	font-size: 14px;
	border-radius: 2px;
	text-align: center;
	box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);

	.p {
		margin: 1px; 
		color: white
	}
  }

 

  &__name {
    font-family: font-family: 'Press Start 2P', cursive;
    text-shadow: 1px 2px 2px white;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  &__stats {
    margin: 1em 0;
    th {
		font-family: 'Press Start 2P', cursive;
    text-shadow: 1px 2px 2px white;
      text-align: center;
      font-weight: 200;
    }
    width: 100%;

    th,
    td {
      width: 50%;
      padding: 0.25em 0.5em 0;
	  text-align: center;
    text-shadow: 1px 2px 2px white;
    }
  }



  box-shadow: 0px 5px 20px -10px #111111;

  

  

  .id {
	  font-size: 10px
  }
}

`;
