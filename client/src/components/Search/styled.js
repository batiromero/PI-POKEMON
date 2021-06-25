import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 100px 0px 60px 0px;
	height: 184px;
	width: 1200px;
	
	.audio {
		width: 400px;
		height: 40px;
		align-items: center;
		
	}


	#player {
		margin-bottom:50px;
		width: 270px;
		margin-left: 12px;
		filter:alpha(opacity=50); opacity:0.7;
		}

		
		.search {
			margin-left: 200px;
			
					}

	.div_menu {
		width: 580px;
		margin-right: 212px;
		
		.div_title {
			display: flex;
			justify-content: center;
			padding-bottom: 20px;
			margin: 0px 24px 0px -342px;
			margin-right: 9px;
			
			.title {
				color: white;
				text-shadow: 3px 2px 4px black;
				font-size: 25px;
				
				
			}
		}

		.form {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 805px;

			.div_btn {
				display: flex;
				justify-content: center;
				margin-top: 40px;
				
				
				.btn_search {
					background: #A21212;
					display: inline-block;
					position: absolute;
					text-align: center;
					font-size: 18px;
					padding: 10px 10px 10px 20px;
					font-family: 'Press Start 2P', cursive;
					text-decoration: none; 
					color: white;
					margin-top: -20px;
					
				
					&:hover,
					&:focus {
						background: #CE372B;
		
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
			
			
		}
	}
	
	
		.input {
			border: 5px;
			border-radius: 1px;
			height: 25px;
			width: 250px;
			font-family: 'Press Start 2P', cursive;
			font-size: 10px;
			
	.center {
		margin-left: 15px;
	}
	
	
	

	
	
`;
