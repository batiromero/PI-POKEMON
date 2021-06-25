import styled from 'styled-components';

export const StyledDiv = styled.div`
	

	.div_title {
		.title {
			text-align: center;
			font-size: 22px;
			padding: 0px;
			margin: 20px;
			margin-top: 70px;
			color: white;
			text-shadow: 2px 2px 2px black;
		}
	}
	.div_img {
		display: flex;
		justify-content: center;
		.img {
			padding: 0px;
			margin-top: 75px;
			margin-left: 600px;
			width: 200px
		}
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
	`

;
