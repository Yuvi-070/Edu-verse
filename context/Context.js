'use client'

import { coursesData } from "@/data/courses";
import { events } from "@/data/events";
import { productData } from "@/data/products";
import React from "react";
import { useContext ,useState, useEffect, useCallback } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {

    return useContext(dataContext);
  };

const LS_BOOKMARKS = "eduverse_bookmarks_v1";
const LS_RECENT = "eduverse_recent_courses_v1";

  export default function Context({ children }) {
    const [cartProducts, setCartProducts] = useState([])
  
    const [cartCourses, setCartCourses] = useState([])
    const [cartEvents, setCartEvents] = useState([])
    const [bookmarkIds, setBookmarkIds] = useState([])
    const [recentCourseIds, setRecentCourseIds] = useState([])

    useEffect(() => {
      try {
        const b = localStorage.getItem(LS_BOOKMARKS);
        const r = localStorage.getItem(LS_RECENT);
        if (b) setBookmarkIds(JSON.parse(b));
        if (r) setRecentCourseIds(JSON.parse(r));
      } catch {
        /* ignore corrupt storage */
      }
    }, []);

    useEffect(() => {
      try {
        localStorage.setItem(LS_BOOKMARKS, JSON.stringify(bookmarkIds));
      } catch {
        /* ignore */
      }
    }, [bookmarkIds]);

    useEffect(() => {
      try {
        localStorage.setItem(LS_RECENT, JSON.stringify(recentCourseIds));
      } catch {
        /* ignore */
      }
    }, [recentCourseIds]);

    const isBookmarked = useCallback(
      (id) => bookmarkIds.includes(Number(id)),
      [bookmarkIds],
    );

    const toggleBookmark = useCallback((id) => {
      const n = Number(id);
      setBookmarkIds((prev) =>
        prev.includes(n) ? prev.filter((x) => x !== n) : [n, ...prev].slice(0, 80),
      );
    }, []);

    const recordCourseView = useCallback((id) => {
      const n = Number(id);
      setRecentCourseIds((prev) =>
        [n, ...prev.filter((x) => x !== n)].slice(0, 16),
      );
    }, []);
    const addCourseToCart = (id)=>{

        if (!cartCourses.filter((elm)=>elm.id == id)[0]) {

           const item = {...coursesData.filter(elm=>elm.id == id)[0],quantity:1}
           setCartCourses(pre=>[...pre,item])
            
        }

    }
    const isAddedToCartCourses = (id)=>{
        if (cartCourses.filter((elm)=>elm.id == id)[0]) {
            return true
         }
         return false

    }
    const addProductToCart = (id)=>{

        if (!cartProducts.filter((elm)=>elm.id == id)[0]) {

           const item = {...productData.filter(elm=>elm.id == id)[0],quantity:1}
           setCartProducts(pre=>[...pre,item])
            
        }

    }
    const isAddedToCartProducts = (id)=>{
        if (cartProducts.filter((elm)=>elm.id == id)[0]) {
            return true
         }
         return false

    }
    const addEventToCart = (id)=>{

        if (!cartEvents.filter((elm)=>elm.id == id)[0]) {

           const item = {...events.filter(elm=>elm.id == id)[0],quantity:1}
           setCartEvents(pre=>[...pre,item])
            
        }

    }
    const isAddedToCartEvents = (id)=>{
        if (cartEvents.filter((elm)=>elm.id == id)[0]) {
            return true
         }
         return false

    }

    const contextElement = {
        
        cartProducts,
        setCartProducts,
        addProductToCart,
        isAddedToCartProducts,


        addCourseToCart,
        isAddedToCartCourses,
        cartCourses,
        setCartCourses,


        cartEvents,
        setCartEvents,
        addEventToCart,
        isAddedToCartEvents,

        bookmarkIds,
        isBookmarked,
        toggleBookmark,
        recentCourseIds,
        recordCourseView,

      };
    return (
        <dataContext.Provider value={contextElement}>{children}</dataContext.Provider>
      );
  }