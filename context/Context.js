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
const LS_PROGRESS = "eduverse_progress_v1";
const LS_NOTES = "eduverse_notes_v1";
const LS_PROFILE = "eduverse_learning_profile_v1";
const LS_THEME = "eduverse_theme_v1";

  export default function Context({ children }) {
    const [cartProducts, setCartProducts] = useState([])
  
    const [cartCourses, setCartCourses] = useState([])
    const [cartEvents, setCartEvents] = useState([])
    const [bookmarkIds, setBookmarkIds] = useState([])
    const [recentCourseIds, setRecentCourseIds] = useState([])
    const [courseProgress, setCourseProgress] = useState({})
    const [courseNotes, setCourseNotes] = useState({})
    const [learningProfile, setLearningProfile] = useState(null)
    const [theme, setTheme] = useState("light")

    useEffect(() => {
      try {
        const b = localStorage.getItem(LS_BOOKMARKS);
        const r = localStorage.getItem(LS_RECENT);
        const p = localStorage.getItem(LS_PROGRESS);
        const n = localStorage.getItem(LS_NOTES);
        const lp = localStorage.getItem(LS_PROFILE);
        const t = localStorage.getItem(LS_THEME);
        if (b) setBookmarkIds(JSON.parse(b));
        if (r) setRecentCourseIds(JSON.parse(r));
        if (p) setCourseProgress(JSON.parse(p));
        if (n) setCourseNotes(JSON.parse(n));
        if (lp) setLearningProfile(JSON.parse(lp));
        if (t) setTheme(JSON.parse(t));
      } catch {
        /* ignore corrupt storage */
      }
    }, []);

    useEffect(() => {
      if (typeof document !== "undefined") {
        document.documentElement.dataset.eduverseTheme = theme;
      }
    }, [theme]);

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

    useEffect(() => {
      try {
        localStorage.setItem(LS_PROGRESS, JSON.stringify(courseProgress));
      } catch {
        /* ignore */
      }
    }, [courseProgress]);

    useEffect(() => {
      try {
        localStorage.setItem(LS_NOTES, JSON.stringify(courseNotes));
      } catch {
        /* ignore */
      }
    }, [courseNotes]);

    useEffect(() => {
      try {
        if (learningProfile) {
          localStorage.setItem(LS_PROFILE, JSON.stringify(learningProfile));
        }
      } catch {
        /* ignore */
      }
    }, [learningProfile]);

    useEffect(() => {
      try {
        localStorage.setItem(LS_THEME, JSON.stringify(theme));
      } catch {
        /* ignore */
      }
    }, [theme]);

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

    const getCourseProgress = useCallback(
      (id) => Number(courseProgress[Number(id)] || 0),
      [courseProgress],
    );

    const setCourseProgressValue = useCallback((id, value) => {
      const n = Number(id);
      const nextValue = Math.max(0, Math.min(100, Number(value) || 0));
      setCourseProgress((prev) => ({ ...prev, [n]: nextValue }));
    }, []);

    const markCourseComplete = useCallback((id) => {
      const n = Number(id);
      setCourseProgress((prev) => ({ ...prev, [n]: 100 }));
    }, []);

    const getCourseNote = useCallback(
      (id) => String(courseNotes[Number(id)] || ""),
      [courseNotes],
    );

    const saveCourseNote = useCallback((id, note) => {
      const n = Number(id);
      setCourseNotes((prev) => ({ ...prev, [n]: String(note || "") }));
    }, []);

    const toggleTheme = useCallback(() => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
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
        courseProgress,
        getCourseProgress,
        setCourseProgressValue,
        markCourseComplete,
        courseNotes,
        getCourseNote,
        saveCourseNote,
        learningProfile,
        setLearningProfile,
        theme,
        toggleTheme,

      };
    return (
        <dataContext.Provider value={contextElement}>{children}</dataContext.Provider>
      );
  }
