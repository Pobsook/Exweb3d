'use client'

import Image from "next/image";
import Style from "./AsideBar.module.css"
import Link from "next/link";
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-6, 3, -14),
  new THREE.Vector3(-4, 5, -11),
  new THREE.Vector3(-1, 7, -8),
  new THREE.Vector3(1, 4, -5),
  new THREE.Vector3(3, 0, -2),
  new THREE.Vector3(5, -3.5, 1)
]);

function Model() {
  const group = useRef();
  const { scene } = useGLTF('/model3d/robot_shark.glb');
  const progressRef = useRef(0);

  useFrame(() => {
    if (!group.current) return;

    progressRef.current += 0.01;
    if (progressRef.current > 1) progressRef.current = 1;

    const position = curve.getPoint(progressRef.current);
    const tangent = curve.getTangent(progressRef.current);

    group.current.position.copy(position);

    const angleY = Math.atan2(tangent.x, tangent.z);
    group.current.rotation.y = angleY;
  });

  return (
    <group ref={group} position={[0, 0, 0]} scale={0.35}>
      <primitive object={scene} />
    </group>
  );
}


export default function AsideBar(){

    const [isOpen, setIsopen] = useState(false)
    const openLoginModal = () => {
        setIsopen(true)
    }
    const closeLoginModal = () => {
        setIsopen(false)
    }

    const [isLogInOpen, setIsLogInOpen] = useState(true)
    const openFormRegis = () => {
        setIsLogInOpen(false)
    }
    const openFormLogin = () => {
        setIsLogInOpen(true)
    }

    return(
        <>
        <div style={{display: "flex"}}>
            <nav className={Style.navbar}>
                <Link className={Style.navlink} href="/"><Image className={Style.imgNav} src="/icon/home.png" width={25} height={25} alt="Home"/></Link>
                <div className={`${Style.navlink} ${Style.searchBar}`}><Image className={Style.imgNav} src="/icon/search-no-border.png" width={25} height={25} alt="Search"/><input className={Style.inputSearch} type="search" placeholder="ค้นหาสินค้า"/></div>
                <button onClick={openLoginModal} className={Style.navlink}><Image className={Style.imgNav} src="/icon/login.png" width={25} height={25} alt="Login"/></button>
            </nav>  
            <aside className={Style.eeeee}>
                <Image className={Style.logo} src="/icon/Logo.png" width={55} height={55} alt="logo"/>
                <Link className={Style.asideLink} href=""><Image className={Style.imgIcon} src="/icon/about.png" width={35} height={35} alt="About"/><p className={Style.text}>About</p></Link>
                <Link className={Style.asideLink} href=""><Image className={Style.imgIcon} src="/icon/location.png" width={35} height={35} alt="Location"/><p className={Style.text}>Location</p></Link>
                <Link className={Style.asideLink} href=""><Image className={Style.imgIcon} src="/icon/box.png" width={35} height={35} alt="Box"/><p className={Style.text}>Product</p></Link>
                <Link className={Style.asideLink} href=""><Image className={Style.imgIcon} src="/icon/telephone.png" width={35} height={35} alt="Contact"/><p className={Style.text}>contact</p></Link>
                <Link className={Style.asideLink} href=""><Image className={Style.imgIcon} src="/icon/instagram.png" width={35} height={35} alt="Instagram"/><p className={Style.text}>Instagram</p></Link>
                <Link className={Style.asideLink} href=""><Image className={Style.imgIcon} src="/icon/social.png" width={35} height={35} alt="Facebook"/><p className={Style.text}>Facebook</p></Link>
                <Link className={Style.asideLink} href=""><Image className={Style.imgIcon} src="/icon/tik-tok.png" width={35} height={35} alt="Tiktok"/><p className={Style.text}>Tiktok</p></Link>
            </aside>
        </div>
        <div className={`${Style.ConModalLogin} ${isOpen ? Style.openLoginModal : Style.closeLoginModal}`}>
            <div className={Style.conForm}>
                <button className={Style.btnCloseModal} onClick={closeLoginModal}>x</button>

                <div className={`${isLogInOpen ? Style.conFormOpen : Style.conFormClose} ${Style.BGLogin}`}>
                    <div className={`${isLogInOpen ? Style.formOpen : Style.none}`} >
                        <h2 className={Style.headForm}>LOGIN</h2>
                        <div className={Style.lineBetween}/>
                        <div className={`${Style.conInput}  ${Style.BGLogin}`} style={{marginTop: "5rem"}}>
                            <input className={Style.input01} type="email" id="emailLogin" placeholder=" " required></input>
                            <label htmlFor="emailLogin" className={`${Style.labelCustom}`}>email</label>
                        </div>
                        <div className={`${Style.conInput}  ${Style.BGLogin}`}>
                            <input className={Style.input01} type="password" id="passwordLogin" placeholder=" " required></input>
                            <label htmlFor="passwordLogin" className={`${Style.labelCustom}`}>password</label>
                        </div>
                        <div className={Style.sssss}>
                            <label>
                                <input type="checkbox" style={{cursor: "pointer"}}/>
                                <span style={{fontSize: "10px", color: "#d6bd6c"}}>  Remember me</span>
                            </label>
                            <span style={{display: "flex", cursor: "pointer"}}>
                                <div><Image style={{backgroundColor: "white", borderRadius: "50%"}} src="/icon/mail.png" width={15} height={15} alt="email"/></div>
                                <p style={{color: "white", fontSize: "10px", marginLeft: "5px", color: "#d6bd6c"}}>forgot password</p>
                            </span>
                        </div>
                        <button className={Style.btnSubLog}>Login</button>
                    </div>
                    <div className={`${isLogInOpen ? Style.none : Style.formClose}`}>
                        <p className={Style.text00}>ล๊อคอินเข้าระบบ</p>
                        <button onClick={openFormLogin} className={Style.btnSubLog}>Login</button>
                    </div>
                </div>

                <div className={`${isLogInOpen ? Style.conFormClose : Style.conFormOpen} ${Style.BGRegis}`}>
                    <div className={`${isLogInOpen ? Style.none : Style.formOpen}`}>
                        <h2 style={{fontSize: "50px", top: "-2.5rem"}} className={Style.headForm}>REGISTRATION</h2>
                        <div className={Style.lineBetween}/>
                        <div className={`${Style.conInput} ${Style.BGRegis}`} style={{marginTop: "4rem"}}>
                            <input className={Style.input01} type="text" id="usernameRegis" placeholder=" " required></input>
                            <label htmlFor="usernameRegis" className={Style.labelCustom}>username</label>
                        </div>
                        <div className={`${Style.conInput} ${Style.BGRegis}`}>
                            <input className={Style.input01} type="email" id="emailRegis" placeholder=" " required></input>
                            <label htmlFor="emailRegis" className={Style.labelCustom}>email</label>
                        </div>
                        <div className={`${Style.conInput} ${Style.BGRegis}`}>
                            <input className={Style.input01} type="password" id="passwordRegis1" placeholder=" " required></input>
                            <label htmlFor="passwordRegis1" className={Style.labelCustom}>password1</label>
                        </div>
                        <div className={`${Style.conInput} ${Style.BGRegis}`}>
                            <input className={Style.input01} type="password" id="passwordRegis2" placeholder=" " required></input>
                            <label htmlFor="passwordRegis2" className={Style.labelCustom}>password2</label>
                        </div>
                        <button className={Style.btnSubLog} style={{marginTop: "1px"}}>Register</button>
                    </div>
                    <div className={`${isLogInOpen ? Style.formClose : Style.none}`}>
                        <p className={Style.text00}>สมัครสมาชิกกับเรา</p>
                        <button onClick={openFormRegis} className={Style.btnSubLog}>Register</button>
                    </div>
                </div>
            </div>
        </div>
        <Canvas
            className={`${isOpen ? "" : Style.none}`}
            style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999,
            pointerEvents: 'none', // 🔒 สำคัญ! ปิดการโต้ตอบทั้งหมด
            }}
            camera={{ position: [0, 2, 10], fov: 50 }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Environment preset="sunset" />
            <Model />
        </Canvas>

        </>
    )
}