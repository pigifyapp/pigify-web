import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ["Team", "Development", "Presale", "Ecosystem", "Treasury", "Legal", "Marketing", "Rewards"],
    datasets: [
        {
            label: "% of total supply",
            data: [9, 11, 8, 10, 5, 5, 10, 42],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ]
        }
    ],
};

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="hero-section">
            <div>
                <div className="container py-6 has-text-centered">
                    <div className="columns">
                        <div className="column">
                            <p className="title is-black">Tokenomics</p>
                        </div>
                    </div>
                </div>

                <div className="container my-4">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <p className="has-text-left"><strong>Rewards</strong> (42%)</p>
                            <p className="has-text-left">Reserved for stakeholder rewards</p>

                            <hr/>

                            <p className="has-text-left"><strong>Development</strong> (11%)</p>
                            <p className="has-text-left">Used to pay for personal, software, etc</p>

                            <hr/>

                            <p className="has-text-left"><strong>Ecosystem</strong> (10%)</p>
                            <p className="has-text-left">Used to provide liquidity and promote the project in the BSC ecosystem</p>

                            <hr/>

                            <p className="has-text-left"><strong>Marketing</strong> (10%)</p>
                            <p className="has-text-left">Used to promote the project across different platforms</p>

                            <hr/>

                            <p className="has-text-left"><strong>Team</strong> (9%)</p>
                            <p className="has-text-left">Assigned to the founding members of the project</p>

                            <hr/>

                            <p className="has-text-left"><strong>Presale</strong> (8%)</p>
                            <p className="has-text-left">Used to finance the project through an ICO, IDO or other sales</p>

                            <hr/>

                            <p className="has-text-left"><strong>Treasury</strong> (5%)</p>
                            <p className="has-text-left">Funds available for the project</p>

                            <hr/>

                            <p className="has-text-left"><strong>Legal</strong> (5%)</p>
                            <p className="has-text-left">Used for all legal issues, advisors, etc</p>
                        </div>

                        <div className="column">
                            <div style={{
                                height: "70vh"
                            }}>
                                <Doughnut data={data}  options={{ maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}