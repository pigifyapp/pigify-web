import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import TokenomicTableEntry from "./TokenomicTableEntry";

ChartJS.defaults.color = "#fff";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ["Team", "Development", "Presale", "Ecosystem", "Treasury", "Legal", "Rewards"],
    datasets: [
        {
            label: "% of total supply",
            data: [19, 11, 8, 10, 5, 5, 32],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
            ]
        }
    ],
};

function TokenomicsTableEntry() {
    return null;
}

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="hero-section tokenomics-section">
            <div>
                <div className="container py-6 has-text-centered">
                    <div className="columns">
                        <div className="column">
                            <p className="title is-black">Tokenomics</p>
                            <p className="subtitle is-black">Our recipe to change the savings world</p>
                        </div>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="columns tokenomics-columns is-vcentered">
                        <div className="doughnut-column column is-two-fifths">
                            <div style={{
                                height: "70vh"
                            }}>
                                <Doughnut data={data}  options={{ maintainAspectRatio: false }} />
                            </div>
                        </div>

                        <div className="column">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Percentage</th>
                                    <th>Description</th>
                                </tr>
                                </thead>

                                <tbody>
                                <TokenomicTableEntry name="Rewards" percentage="42" description="Reserved for incentives and stakeholder rewards"/>
                                <TokenomicTableEntry name="Development" percentage="11" description="Used to pay for personal, software, marketing, etc"/>
                                <TokenomicTableEntry name="Ecosystem" percentage="10" description="Used to provide liquidity and promote the project"/>
                                <TokenomicTableEntry name="Team" percentage="19" description="Assigned to the founding members of the project"/>
                                <TokenomicTableEntry name="Presale" percentage="8" description="Used to finance the project through an ICO, IDO or other sales"/>
                                <TokenomicTableEntry name="Treasury" percentage="5" description="Funds available for the project"/>
                                <TokenomicTableEntry name="Legal" percentage="5" description="Used for all legal issues, advisors, etc"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}