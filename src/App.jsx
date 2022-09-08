import "./App.css";
import mainBannerImg from "./assets/images/main-banner.jpg";
import bgSectionSecond from "./assets/images/introduction-bg.png";
import bgSectionThird from "./assets/images/bes-bg.png";
import thirdItemImg1 from "./assets/images/third-item1.png";
import thirdIcon from "./assets/images/third-icon1.png";
import thirdItemImg2 from "./assets/images/third-item2.png";
import thirdItemImg3 from "./assets/images/third-item3.png";
import fourthItemImg1 from "./assets/images/fourth-item1.png";
import fourthIcon1 from "./assets/images/like-icon.svg";
import fifthImg1 from "./assets/images/fifth-img1.png";
import sixthImg1 from "./assets/images/sixth-item1.png";
import sixthImg2 from "./assets/images/sixth-item2.png";
import sixthImg3 from "./assets/images/sixth-item3.png";
import sixthImg4 from "./assets/images/sixth-item4.png";
import sixthImg5 from "./assets/images/sixth-item5.png";
import seventhImg1 from "./assets/images/seventh-img.svg";
import seventhImg2 from "./assets/images/seventh-img1.svg";
import seventhImg3 from "./assets/images/seventh-img1.png";
import seventhImg4 from "./assets/images/seventh-img2.png";
import seventhImg5 from "./assets/images/seventh-img3.png";
import seventhImg6 from "./assets/images/seventh-img4.png";
import seventhImg7 from "./assets/images/seventh-img5.png";
import seventhImg8 from "./assets/images/seventh-img6.png";
import seventhImg9 from "./assets/images/seventh-img7.png";
function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="header-title">What happened</h2>
        <div className="wrap-header">
          <span className="content-title">Introduction</span>
          <span className="content-title">solution</span>
          <span className="content-title">Rate plan</span>
          <span className="content-title">|</span>
          <span className="content-title">login</span>
          <span className="content-title">Apply for free use</span>
        </div>
      </header>
      <section className="section-first">
        <img className="banner-img" src={mainBannerImg} alt="main banner" />
      </section>
      <section className="section-second">
        <img className="img-second" src={bgSectionSecond} alt="background" />
        <div className="second-wrap">
          <h2 className="second-title">What Happened!</h2>
          <p className="second-content">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand's success. How to create mobile-optimized videos in
            minutes.
          </p>
        </div>
      </section>
      <section className="section-third">
        <img className="third-img" src={bgSectionThird} alt="bg third" />
        <div className="third-title-wrap">
          <h2 className="third-title">Best Product</h2>
          <p className="third-text">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first{" "}
          </p>
        </div>
        <div className="wrap-item">
          <div className="third-item">
            <img
              className="third-item-img"
              src={thirdItemImg1}
              alt="thirdItemImg1"
            />
            <div className="third-icon-wrap">
              <img
                className="third-item-icon"
                src={thirdIcon}
                alt="thirdIcon"
              />
              <p className="third-item-icon-text">01</p>
            </div>

            <div className="third-item-wrap">
              <p className="third-item-text">How to create mobile-optimized</p>
              <div className="third-item-logo">
                <p>GO</p>
              </div>
            </div>
          </div>
          <div className="third-item">
            <img
              className="third-item-img"
              src={thirdItemImg2}
              alt="thirdItemImg1"
            />
            <div className="third-icon-wrap">
              <img
                className="third-item-icon"
                src={thirdIcon}
                alt="thirdIcon"
              />
              <p className="third-item-icon-text">02</p>
            </div>

            <div className="third-item-wrap">
              <p className="third-item-text">How to create mobile-optimized</p>
              <div className="third-item-logo">
                <p>GO</p>
              </div>
            </div>
          </div>
          <div className="third-item">
            <img
              className="third-item-img"
              src={thirdItemImg3}
              alt="thirdItemImg1"
            />
            <div className="third-icon-wrap">
              <img
                className="third-item-icon"
                src={thirdIcon}
                alt="thirdIcon"
              />
              <p className="third-item-icon-text">03</p>
            </div>

            <div className="third-item-wrap">
              <p className="third-item-text">How to create mobile-optimized</p>
              <div className="third-item-logo">
                <p>GO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-fourth">
        <div className="fourth-wrap">
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
          <div className="fourth-item-wrap">
            <img
              className="fourth-item-img"
              src={fourthItemImg1}
              alt="fourthItemImg1"
            />
            <p className="fourth-item-title">[what happen] How to create</p>
            <div className="fourth-item-hobbies">
              <p className="fourth-item-price">2,500 won</p>
              <div className="fourth-item-like-wrap">
                <img
                  className="fourth-item-like-icon"
                  src={fourthIcon1}
                  alt="fourthIcon1"
                />
                <span>253</span>
              </div>
            </div>
          </div>
        </div>
        <button className="fourth-btn">SEE MORE</button>
      </section>
      <section className="section-fifth">
        <h2 className="fifth-title">Brand Story</h2>
        <p className="fifth-text">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <div className="fifth-content-wrap">
          <img src={fifthImg1} alt="fifthImg1" />
          <div className="fifth-text-wrap">
            <h2 className="fifth-text-title">What Happened’s Brand story</h2>
            <p className="fifth-text-content">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.{" "}
            </p>
            <button className="fifth-text-button">SEE MORE</button>
          </div>
        </div>
      </section>
      <section className="section-sixth">
        <h2 className="sixth-title">Happened’s issue</h2>
        <p className="sixth-text">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <button className="sixth-button">SEE MORE</button>
        <div className="img-class">
          <img className="img-class-item" src={sixthImg4} alt="sixth" />
          <img className="img-class-item" src={sixthImg5} alt="sixth" />
        </div>
        <div className="sixth-content-wrap">
          <div className="sixth-item-wrap">
            <h3 className="sixth-item-title">whpn issue</h3>
            <img className="sixth-item-img" src={sixthImg1} alt="sixthImg1" />
            <img
              className="sixth-item-img-ad"
              src={sixthImg3}
              alt="sixthImg3"
            />
          </div>
          <div className="sixth-item-wrap1">
            <h3 className="sixth-item-title1">B Brand</h3>
            <img className="sixth-item-img1" src={sixthImg2} alt="sixthImg1" />
          </div>
          <div className="sixth-item-wrap1">
            <h3 className="sixth-item-title1">C Brand</h3>
            <img className="sixth-item-img1" src={sixthImg2} alt="sixthImg1" />
          </div>
          <div className="sixth-item-wrap1">
            <h3 className="sixth-item-title2">D Brand</h3>
            <img className="sixth-item-img1" src={sixthImg2} alt="sixthImg1" />
          </div>
          <div className="sixth-item-wrap1">
            <h3 className="sixth-item-title1">E Brand</h3>
            <img className="sixth-item-img1" src={sixthImg2} alt="sixthImg1" />
          </div>
        </div>
      </section>
      <section className="section-seventh">
        <h2 className="seventh-title">what happened</h2>
        <p className="seventh-text">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first{" "}
        </p>
        <button className="seventh-button">SEE MORE</button>
        <img className="seventhImg1" src={seventhImg1} alt="seventhImg1"></img>
        <img className="seventhImg2" src={seventhImg2} alt="seventhImg2"></img>
        <img className="seventhImg3" src={seventhImg3} alt="seventhImg3"></img>
        <img className="seventhImg4" src={seventhImg4} alt="seventhImg4"></img>
        <img className="seventhImg5" src={seventhImg5} alt="seventhImg5"></img>
        <img className="seventhImg6" src={seventhImg6} alt="seventhImg6"></img>
        <img className="seventhImg7" src={seventhImg7} alt="seventhImg7"></img>
        <img className="seventhImg8" src={seventhImg8} alt="seventhImg8"></img>
        <img className="seventhImg9" src={seventhImg9} alt="seventhImg9"></img>
      </section>
      <footer className="footer">
        <div className="footer-info-wrap">
          <h3 className="footer-info-title">what happened</h3>
          <p className="footer-info-text">
            [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어
            영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10
            이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
          </p>
        </div>
        <div className="footer-more-wrap">
          <div className="footer-more-item">
            <h3 className="more-item-title">about us</h3>
            <p className="more-item-text">회사 소개 인재 채용 상시 할인 혜택</p>
          </div>
          <div className="footer-more-item">
            <h3 className="more-item-title">my order</h3>
            <p className="more-item-text">
              내 주문 주문 배송 취소 / 교환 / 반품 내역 상품 리뷰 내역 증빙 서류
              발급
            </p>
          </div>
          <div className="footer-more-item">
            <h3 className="more-item-title">my account</h3>
            <p className="more-item-text">
              회원 정보 수정 회원 등급 마일리지 현황 쿠폰
            </p>
          </div>
          <div className="footer-more-item">
            <h3 className="more-item-title">help</h3>
            <p className="more-item-text">
              1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문 고객의
              소리
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
