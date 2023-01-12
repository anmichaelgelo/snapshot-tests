import {Button, Card} from 'react-bootstrap';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/me.jpg" width={100} />
      <Card.Body>
        <Card.Title>anmichaelgelo</Card.Title>
        <Card.Text>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;