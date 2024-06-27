import ButtonTwo from "../Buttons/ButtonTwo";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css/autoplay';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faQuoteRight } from '@fortawesome/free-solid-svg-icons'


const Testimonial = () => {
  return (
    <>
        <section>
            <div className='container'>
                <div className='row items-center justify-between pb-20'>
                    <div className='col-md-7'>
                        <div className='text-wrapper'>
                            <h5 className='item--subtitle'>
                                CLIENTS TESTIMONIAL
                            </h5>
                            <h1 className='item--title !text-[var(--text-color)]'>
                                What Our Clients Say 
                                <br />
                                About {" "}
                                <span className="text-[var(--color-red)]">
                                    AutoFixers...
                                </span>
                            </h1>
                        </div>
                    </div>
                    {/* <div className='col-md-5'>
                        <div className="md:text-end">
                            <ButtonTwo text="All Reviews"/>
                        </div>
                    </div> */}
                </div>

                <div className="testimonial-swiper select-none">
                    <Swiper
                        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        pagination={{ clickable: true }}
                        loop
                        speed={2500}
                        autoplay
                        autoHeight
                        >
                        <SwiperSlide>
                            <div className="px-4 py-8 lg:py-24 xl:px-40 bg-[var(--color-dark-black-two)]">
                                <div className="flex justify-between max-md:flex-wrap gap-10">
                                    <div className="relative mx-auto">
                                        <div className="image-holder">
                                            <img src="/Images/Testimony/testimony-1.jpg" alt="" />
                                        </div>
                                        <div className="item--icon bottom-3 left-[50%] translate-x-[-50%]">
                                            <FontAwesomeIcon icon={faQuoteRight} />
                                        </div>
                                    </div>
                                    <div className="max-w-[950px] px-4">
                                        <div className="item--subtitle pb-10">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="item--description pb-10">
                                            “I am extremely grateful to AutoFixers Visa Consultancy for making my dream true. The helped me process my visa for Canada. It has accepted in record time. AutoFixers are amazing so I Highly recommend them.”
                                        </div>
                                        <div>
                                            <h5 className="item--title !text-3xl !m-0">Ashley Jonathon</h5>
                                            <h5 className="item--designation">Toronto</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="px-4 py-8 lg:py-24 xl:px-40 bg-[var(--color-dark-black-two)]">
                                <div className="flex justify-between max-md:flex-wrap gap-10">
                                    <div className="relative mx-auto">
                                        <div className="image-holder">
                                            <img src="/Images/Testimony/testimony-2.jpg" alt="" />
                                        </div>
                                        <div className="item--icon bottom-3 left-[50%] translate-x-[-50%]">
                                            <FontAwesomeIcon icon={faQuoteRight} />
                                        </div>
                                    </div>
                                    <div className="max-w-[950px] px-4">
                                        <div className="item--subtitle pb-10">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="item--description pb-10">
                                            “I am extremely grateful to AutoFixers Visa Consultancy for making my dream true. The helped me process my visa for Canada. It has accepted in record time. AutoFixers are amazing so I Highly recommend them.”
                                        </div>
                                        <div>
                                            <h5 className="item--title !text-3xl !m-0">Bob Garrison</h5>
                                            <h5 className="item--designation">Sydney</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="px-4 py-8 lg:py-24 xl:px-40 bg-[var(--color-dark-black-two)]">
                                <div className="flex justify-between max-md:flex-wrap gap-10">
                                    <div className="relative mx-auto">
                                        <div className="image-holder">
                                            <img src="/Images/Testimony/testimony-3.jpg" alt="" />
                                        </div>
                                        <div className="item--icon bottom-3 left-[50%] translate-x-[-50%]">
                                            <FontAwesomeIcon icon={faQuoteRight} />
                                        </div>
                                    </div>
                                    <div className="max-w-[950px] px-4">
                                        <div className="item--subtitle pb-10">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="item--description pb-10">
                                            “I am extremely grateful to AutoFixers Visa Consultancy for making my dream true. The helped me process my visa for Canada. It has accepted in record time. AutoFixers are amazing so I Highly recommend them.”
                                        </div>
                                        <div>
                                            <h5 className="item--title !text-3xl !m-0">Helen Jordan</h5>
                                            <h5 className="item--designation">Chicago</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>     
            </div>
        </section>
    
    </>
  )
}

export default Testimonial
