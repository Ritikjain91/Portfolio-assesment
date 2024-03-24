import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    const [catFact, setCatFact] = useState(null);
    const [catImageUrl, setCatImageUrl] = useState('');
    const [dog, setDog] = useState(null);
    const [dogImageUrl, setDogImageUrl] = useState('');
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchCatFact = async () => {
            try {
                const response = await axios.get('https://cat-fact.herokuapp.com/facts/random');
                setCatFact(response.data);
            } catch (error) {
                console.error('Error fetching cat fact:', error);
            }
        };

        const fetchCatImage = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/images/0XYvRd7oD');
                setCatImageUrl(response.data.url);
            } catch (error) {
                console.error('Error fetching cat image:', error);
            }
        };

        const fetchDog = async () => {
            try {
                const response = await axios.get('https://api.thedogapi.com/v1/breeds');
                setDog(response.data[0]);
            } catch (error) {
                console.error('Error fetching dog:', error);
            }
        };

        const fetchDogImage = async () => {
            try {
                const response = await axios.get('https://dog.ceo/api/breeds/image/random');
                setDogImageUrl(response.data.message);
            } catch (error) {
                console.error('Error fetching dog image:', error);
            }
        };

        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-02-24&sortBy=publishedAt&apiKey=9349c48d3c8c41e1b30f15983c0c986e');
                setNews(response.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchCatFact();
        fetchCatImage();
        fetchDog();
        fetchDogImage();
        fetchNews();
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    {catFact && (
                        <div>
                            <h1>{catFact.type}</h1>
                            <p>{catFact.text}</p>
                            {catImageUrl && <img src={catImageUrl} alt="Cat" width='30%' />}
                        </div>
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {dog && (
                        <div>
                            <h1>{dog.name}</h1>
                            <p>{dog.breed_group}</p>
                            {dogImageUrl && <img src={dogImageUrl} alt="Dog" width='30%' />}
                        </div>
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {news && (
                        <div>
                            <h2>Latest News</h2>
                            {news.articles.map((article, index) => (
                                <div key={index}>
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                    <p>Author: {article.author}</p>
                                    <p>Published At: {article.publishedAt}</p>
                                    {article.urlToImage && <img src={article.urlToImage} alt="Article" style={{ maxWidth: '100%' }} />}
                                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                                </div>
                            ))}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;
