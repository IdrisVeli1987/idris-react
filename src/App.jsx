// import Gallery from "./Gallery";
import UserCard from "./UserCard";

const App = () => {
  const data = [
    {
      id: 1,
      img1: "https://lh3.googleusercontent.com/pw/AJFCJaWecHQwR3a1yum03dreS7sCK0BC2wFps7Thf1yyGuWXqZ3mJfnwrMaWIad4fm2cqKuwVUYPy2f8RAeEsI925_yzLq2XKx0yNEzLJ_M6868ftr6pTZ_4gpkpDVGmU61t8sfqAN43G5hY2MoR2mrlxOayC5QgQc-HbMZFDPAVUUD5iXAnt5M8bacZyBpKPKphoW6x_k9TF7X-HLhUnpcWSmbEccEcmauPp2qdhpglS3bcf49NxmcO0QkjubXLAFvk0KMs-QCk_w3mYgKcIaN7cayZJzvLPSq4XoO2tc1HfjHCG8TZKrQ-WhWdxeTl8NLIwefsd8X4Pd6X6HYIyuE3S7P77UOYgK_xiGDnKvcE08rKGuIVd7IT4RX_DMye5nyrERMMeJIUzt6Ncdnmf1h5vtIHLChg2B3iu306csF0G3ZiUQKmvMLCrTCJvQeoBXU0YN78x-oCVatuAueFe3eVW2MjheOr76fZ4lQDGvm8cPi8eyUiS54VxOH0KBChfpSJBepNkT19Mi4W1Bqu1gw8JhXf3PpUku999UwUwzl3IwDwUSm4LEk2EZCjyH0I06Jt5jJicohwuX-zg4zqg-AOIEre3GGwWhi-gxAC8IyidARbY3SHIHdTVngY4PMDbVRbSh4mr67imwTtohr__jrbQm9WlI-DYrAikI2Z1EpsjpmhZ0E2d67HawWYVWTnaLZ0l4a_k3hnz8y9ZzCzfCmwCHpPgRPbz0-m4Jjky482dJdCKOyHZa1so1gf01S1E2m_9xMzgOXmBRxdIdXS4FNhSjIdLqIIg3jhjbCCHX95FvGLY5_gKMKUBVhQaTM2f1YCgSbteiLYy3p4MlfpMbMRiHezeboPYowTcqB78T-QO6CnpIdpG28mrjIgv7CbWvlLalOfHL-Wt668BV5ubOyBQU2OK94=w640-h640-s-no?authuser=0",
      country: "Azerbaijan",
      city: "Baku",
      deparmnet: "Frontend development",
      name: "Idris",
    },
    {
      id: 2,
      img1: "https://lh3.googleusercontent.com/pw/AJFCJaWyThoIWvJx4o3K7dvvxktE6VzR7uDiAOe_79mcGF9yLBM4kPEbp1JTcNXva_kCHIIK-yQmaT9-DJrlx5e_XoEoFFbkTIEE4-gBJBG_mA21p3PdB22thsHfgm5mMP-PI7-iCglfbuv0k7uGxdSKHv4ciueFn7flWsZYUsDF7QyRKQwG14eDtjcr7aMq-pPSWNLrB3QpM32jvdjLEBSt2NaWezJl9Hg_bYlsadyU14YG7a2enmJeGMIp0k_i1QZc_ULgBxt2RxOLlLz39F5ZvrYzVOHNWPz0x-Y54_Y8WkTZrKoyJ0dJMtHxbdaW5wHr-TXy9HXCIYMW7k78lP0pgCiEINtzU0sS9BB-udBW7Fcc_l0FzIK9xqfWVp2SjRZ9igTZieNPx6llO4BkphwhVmsl46wei2eCZzGNHq95_3YU0xxlJT_Y6G8iTd734nONWRSs8ZvzJR3UmFmH8-RJeuroQY7Mw98TNDb8Pmv7P9jCgRPF1y8l3yfmtsIQS_XVjXHTnjll7EMmLu7LyvogeUsRBZI3fYfVf4kGDqrJllqdsWfdVR7iMR8NzpXeOLBo9Q56DAKNNTSuElJ_woGpTssayoC13Xumvm0_ixtlkOSPe4pQQxMrfW5t73YGw_I1wNSS2A7qfWNekTPBqe5HG4xkA-C2qoPB8DI0ObQx0Dc-lokgmGaHMX6el0ssVtz0bPUGhAGTzE_FdWN7evqAD8KsX4c4boj4GcytUAqsqhuCfCJnii2wiDwZStWBa34JJ3E5IsfAEPhx_DXKTzroG8Ph4tQdU-CcOJYsRKRvbuHYWA3gzuTaL96djjyfrp2nD1war1-_wDTf5NVVO7dzthyMBlh3bzhOaaXWtf8lapEc-7PozM-zIPuDmQh48WxYux37Uz9PwmqHNwkekU2eSYi2NIE=w1080-h720-s-no?authuser=0",
      country: "Azerbaijan",
      city: "Baku",
      deparmnet: "Frontend development",
      name: "Idris",
    },
  ];

  return (
    <div className="App">
      <div className="usercard_container">
        {data.map((card) => {
          return <UserCard key={card.id} card={card} />;
        })}
      </div>
      {/* <Gallery /> */}
    </div>
  );
};
export default App;
