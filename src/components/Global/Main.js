import styled, { css } from 'styled-components'
import { Flex } from 'grid-styled';

export const AffiliateCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 16px;
    padding-top: 16px;
        a {
            color: #424242;
        font-weight: normal;
        text-decoration-style: none;
        list-style: none;
    }
    img {
        padding-bottom: 20px;
        object-fit: cover;
        max-width: 200px;
        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
    }
    `;

export const sizes = {
    desktop: 1200,
    tablet: 768,
    phone: 376
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
    return acc
}, {})

export const HomeFlex = styled.section`
    align-items: center;
    width: 100vw;
    padding: 40px 0 0;
    display: flex;
    flex-direction: column;
    justifty-content: center;
    background-color: #f2f2f2;
  `;

export const ContentWrapper = styled.div`
    width: 100vw;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    ${media.desktop`flex-direction: row;`};
	${media.tablet`flex-direction: column;`};
	${media.phone`flex-direction: column;`};
`;

export const CustomFlex = styled(Flex)`
    flex-wrap: wrap;
    justify-content: center;
    ${media.desktop`flex-direction: row;`};
	${media.tablet`flex-direction: column;`};
	${media.phone`flex-direction: column;`};
    `;

export const Main = styled.div`
    margin: 2rem 5rem;
    width: 75%;
    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    padding-top: 10px;
    padding-bottom: 10px;
    ${media.desktop`width: calc(100% - 10rem);`}
	${media.tablet`width: calc(100% - 5rem);`}
	${media.phone`width: calc(100% - 2rem);`}
    ${media.desktop`margin: 0 10rem;`}
	${media.tablet`margin: 0 5rem;`}
	${media.phone`margin: 1rem 1rem;`}
    `;

export const RightAside = styled.div`
    width: 30%;
    margin: 2rem 5rem;
     background-color: white;

    ${media.desktop`width: 20rem;`}
	${media.tablet`width: 20rem;`}
	${media.phone`width: calc(100% - 10rem);`}
    ${media.desktop`margin:0 20rem;`}
	${media.tablet`margin:0 20rem;`}
	${media.phone`margin: 1rem 5rem;`}
    `;

export const TwentyFive = styled.div`
width: 25%;
`
export const Img = styled.img`
    height: 100%;
    width: auto;
`

export const DishesWrapper = styled.div`
    height: 500px;
    width: 200px;
    `;

export const CardImage = styled.img`
width: 150px;
height: 130px;
background: grey;
`;   

export const PageHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

