import styled from 'styled-components';
import image from '../../assets/img/landscape.webp'

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;

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

	  

	.div_cards {
		display: flex;
		justify-content: center;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 20fr));
		margin-top: 30px;
		width: 900px;
		height: 500px;

		.link {
			text-decoration: none;
			color: inherit;
		}

		.div_card {
			padding-left: 15px;
			text-align: center;
			margin: 5px;
			height: 200px;
			border-radius: 2px;
			
	

			.div_name {
				width: 190px;
				height: 30px;
				margin: 15px 0px 0px 0px;
				color: white;
				font-size: 17px;
			}

			.div_type_container {
				display: flex;
				flex-direction: row;
				justify-content: center;

				.div_types {
					margin: 0px 5px 0px 0px;
					padding: 1px 1px 1px 1px;
					font-size: 11px;
					border-style: solid;
					border-color: black;
					border-width: 0px;
					border-radius: 2px;
					background-color: #fcf300;
					box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);

					.p {
						margin: 0px 7px 0px 7px;
					}
				}
			}

			.img {
				margin: 0px 0px -10px -10px;
				width: 140px;
			}
			&:hover {
				
					box-shadow: 6px 0 black, -6px 0 black, 0 -6px black, 0 6px black;
					margin: 6px auto;
				 
				cursor: pointer;
			}
			&:active {
				outline: 0;
				transform: translateY(3px);
			}
		}
	}

	.div_back {
		width: 100px;
		color: white;
		text-shadow: 1px 2px 1px black;
		font-size: 20px;
		cursor: pointer;
		&:hover {
			transform: translateY(-3px);
			cursor: pointer;
		}
		&:active {
			outline: 0;
			transform: translateY(3px);
		}
	}

		.imgLoading{
			width: 10px;

		}
	
		.div_btn {
			display: flex;
			justify-content: center;
			margin-top: 50px;
			
			
			.eightbit-btn {
				background: #A21212;
				display: inline-block;
				position: relative;
				text-align: center;
				font-size: 23px;
				padding: 10px 10px 10px 20px;
				font-family: 'Press Start 2P', cursive;
				text-decoration: none; 
				color: white;
				box-shadow: inset (-4px) (-4px) 0px 0px #8C2022 ;
			
				&:hover,
				&:focus {
					background: #CE372B;
					box-shadow: inset (-4px*1.5) (-4px*1.5) 0px 0px #8C2022;
				}
			
				&:active {
					box-shadow: inset 4px 4px 0px 0px #8C2022;
				}
			
				&:before,
				&:after {
				content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					box-sizing: content-box;
				}
			
				&:before {
					top: -6px;
					left: 0;
					border-top: 6px black solid;
					border-bottom: 6px black solid;
				}
			
				&:after {
					left: -6px;
					top: 0;
					border-left: 6px black solid;
					border-right: 6px black solid;
				}
		
			}
		}

		.onSearch {
			display:flex;
			margin-bottom: 50px;
			justify-content: center;
			
		}

	
	
`;
