import React from "react";
import { Link } from 'react-router-dom';
// component
import ConnectWalletButton from "./ConnectWalletButton";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function Navbar() {
    const { publicKey } = useWallet();

    const isOwner = ( publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false );
    
    const renderNotConnectedContainer = () => (
        <div className="button-container">
            <WalletMultiButton className="cta-button connect-wallet-button" />
        </div>
    );

    return <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" style={{"color" : "inherited", "textDecoration":"none"}}>homeqube</Link>
                <div className="">
                    <button type="button" className="btn btn-light btn-pill m-2">Cart</button>
                    {/* <ConnectWalletButton/> */}
                    {publicKey ? 
                        <ConnectWalletButton pubkey={publicKey}/> : 
                        <WalletMultiButton className="cta-button connect-wallet-button" />
                    }
                </div>
            </div>
        </nav> 
        </>
}


export default Navbar;