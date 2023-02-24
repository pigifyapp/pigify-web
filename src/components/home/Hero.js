import savingImage from "../../images/saving.jpg";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import MetamaskModal from "./MetamaskModal";
import web3 from "../../web3/web3";

export default function Hero() {
    const [isLoading, setLoading] = useState(false)
    const [isMetamaskModalOpen, setMetamaskModalOpen] = useState(false);
    const navigate = useNavigate();

    function getWalletNetworkDetails() {
        const isTesting = false;

        if(isTesting || process.env.IS_TESTING) {
            return {
                desiredId: 97,
                network: {
                    chainId: web3.utils.toHex(97),
                    chainName: "BSC Testnet",
                    nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18
                    },
                    rpcUrls: ["https://data-seed-prebsc-2-s2.binance.org:8545"],
                    blockExplorerUrls:["https://testnet.bscscan.com/"]
                }
            };
        }

        return {
            desiredId: 56,
            network: {
                chainId: web3.utils.toHex(56),
                chainName: "BNB Smart Chain Mainnet",
                nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18
                },
                rpcUrls: ["https://bsc-dataseed3.binance.org/"],
                blockExplorerUrls:["https://bscscan.com"]
            }
        };
    }

    async function handleAppLaunch() {
        if(!window.ethereum) {
            setMetamaskModalOpen(true);
            return;
        }

        setLoading(true);

        try {
            await connectWallet();
            await verifyWalletNetwork();

            navigate("/dashboard");
        } catch(e) {
            console.log("Error during app launch!");
            console.log(e.message);
        }

        setLoading(false);
    }

    async function connectWallet() {
        await window.ethereum.request({ method: "eth_requestAccounts" });
    }

    async function verifyWalletNetwork() {
        const chainId = await web3.eth.getChainId();

        const {desiredId, network} = getWalletNetworkDetails();

        console.log("Current chain id: " + chainId);

        if(chainId !== desiredId) {
            try {
                await switchWalletNetwork(desiredId);
                console.log("Successfully switch to chain id " + desiredId);
            } catch(e) {
                console.log("Couldn't switch to chain " + desiredId);
                console.log("Trying to add chain...")

                await addWalletNetwork(network);
                await switchWalletNetwork(desiredId);

                console.log("Successfully added chain.");
            }
        }
    }

    async function switchWalletNetwork(networkId) {
        await window.ethereum.request({
            method:'wallet_switchEthereumChain',
            params: [{chainId: web3.utils.toHex(networkId)}]
        })
    }

    async function addWalletNetwork(network) {
        try {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [network]
            });
        } catch(e) {
            console.log("Couldn't add network :/ Everything's wrong smh.");
        }
    }

    function handleMetamaskModalClose() {
        setMetamaskModalOpen(false);
    }

    return (
        <section className="hero hero-section is-fullheight">
            <MetamaskModal isActive={isMetamaskModalOpen} handleClose={handleMetamaskModalClose} />
            <div className="hero-body columns">
                <div className="column">
                    <p className="my-0 mb-3 mainhero-title">
                        Shape your financial destiny.
                    </p>

                    <p className="my-3 mainhero-subtitle" style={{width: "80%"}}>
                        Pigify is a <strong>decentralized</strong> saving platform that will <strong>force you</strong> to save and <strong>achieve</strong> your <strong>financial goals</strong>.
                    </p>

                    <a className={"button is-danger mt-3 mainhero-button" + (isLoading ? " is-loading" : "")} onClick={handleAppLaunch}>Start Saving</a>
                </div>

                <div className="column">
                    <img src={savingImage} alt="sd"/>
                </div>
            </div>
        </section>
    );
}