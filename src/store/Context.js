import { createContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';

import commerce from 'lib/commerce/commerce';

const Context = createContext({
  AllProducts: [],
  TargetPrduct: [],
  AllCategoryNames: [],
  FirstCategoryName: '',
  Cart: {},
  CartIsEmpty: true,
  IsProductsLoading: true,
  IsProductLoading: true,
  IsCartLoading: true,
  IsCheckoutLoading: true,
  ShippingCountries: {},
  FirstCountry: '',
  CountryCode: '',
  ShippingSubdivisions: {},
  ShippingOptionsData: '',
  ActiveStep: 0,
  AllData: {},
  TokenId: null,
  DarkModeStatus: true,
  SearchValue: '',
  Favorites: [],
  TotalFavorites: 0,
  customTheme: {},
  SetCartEmptyStatus: (status)=> {},
  GetProductById: (productId)=> {},
  GetAllCategoryNames: ()=> {},
  GetProductsByCategory: (categorySlug)=> {},
  SetFirstCategoryName: (value)=> {},
  RetriveProduct: ()=> {},
  GetCartStatus: ()=> {},
  AddToCart: (productId, quantity)=> {},
  RemoveProduct: (productId)=> {},
  Quantity: (productId, quantity)=> {},
  EmptyCart: ()=> {},
  GenerateToken: (cartId, typeName)=> {},
  AllCountries: (theToken)=> {},
  SelectedCountryCode: (countryName, countryCode)=> {},
  Subdivisions: (countryCode)=> {},
  ShippingOptions: (checkoutId, country, region)=> {},
  SetActiveStep: (stepType)=> {},
  SetSubmitData: (data)=> {},
  NewCart: ()=> {},
  SetSearchValue: (searchValue)=> {},
  SetModeStatus: ()=> {},
  SetDarkModeStatus: (value)=> {},
  SetAllFavorites: (value)=> {},
  AddToFavorite: (FavoriteMovies)=> {},
  RemoveFavoriteItem: (MovieId)=> {},
  ItemIsFavorite: (MovieId)=> {},
});

export const ContextProvider = ({ children })=> {

  const [ IsProductsLoading, setIsProductsLoading ] = useState(true);
  const [ IsProductLoading, setIsProductLoading ] = useState(true);
  const [ IsCartLoading, setIsCartLoading ] = useState(true);  
  const [ IsCheckoutLoading, setIsCheckoutLoading ] = useState(true);  
  const [ AllProducts, setAllProducts ] = useState([]);
  const [ TargetProduct, setTargetProduct] = useState([]);
  const [ AllCategoryNames, setAllCategoryNames ] = useState([]);
  const [ FirstCategoryName, setFirstCategoryName ] = useState('');
  const [ Cart, setCart ] = useState({});
  const [ CartIsEmpty, setCartIsEmpty ] = useState(true);
  const [ TokenId, setTokenId ] = useState(null);
  const [ ActiveStep, setActiveStep ] = useState(0);
  const [ ShippingCountries, setShippingCountries ] = useState(null);
  const [ FirstCountry, setFirstCountry ] = useState('');
  const [ CountryCode, setCountryCode ] = useState();
  const [ ShippingSubdivisions, setShippingSubdivisions ] = useState(null);
  const [ ShippingOptionsData, setShippingOptionsData ] = useState();
  const [ PersonalInfoData, setPersonalInfoData ] = useState();
  const [ AllData, setAllData ] = useState();
  const [ SearchValue, setSearchValue ] = useState('');
  const [ DarkModeStatus, setDarkModeStatus ] = useState(true);
  const [ AllFavoritesContent, setAllFavoritesContent ] = useState([]);
      
  //======== Home Page Helpers

  const GetProductByIdHandler = async (productId)=> {
    const res = await commerce.products.list({query: productId});
    setTargetProduct(res.data);
    setIsProductLoading(false);
  };

  const AllCategoryNamesHandler = async ()=> {
    const res = await commerce.categories.list().then(result => result.data);
    setAllCategoryNames(res);
    setFirstCategoryName(Object.entries(res)[0][1].name);
  };

  const SetFirstCategoryNameHandler = (value)=> FirstCategoryName(value);

  const GetProductsByCategoryHandler = async (categorySlug)=> {
    setIsProductsLoading(true);
    const res = await commerce.products.list({
      category_slug: [categorySlug]
    }).then(resonse => resonse.data);
    setAllProducts(res);
    setIsProductsLoading(false);
  };

  const ProductRetrieveHandler = async ()=> {
    const res = await commerce.cart.retrieve();
    setCart(res);
    setIsCartLoading(false);
  };

  const SearchValueHandler = (searchValue)=> setSearchValue(searchValue);
  
  const ModeStatusHandler = ()=> {
    localStorage.setItem('DarkModeStatus', JSON.stringify(DarkModeStatus));
    setDarkModeStatus(!DarkModeStatus);
  };

  const SetDarkModeStatusHandler = (value)=> setDarkModeStatus(value);

  //========= Cart Page Helpers
  const CheckCartHandler = async (cart)=> {
      const CartStatus = await cart.total_items === 0 ?true :false;
      setCartIsEmpty(CartStatus);
  };

  const CartChangeStatus = (status)=> setCartIsEmpty(status);

  const AddToCartHandler = async (productId, quantity)=> {
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const RemoveProductHandler = async (productId)=> {
      const {cart} = await commerce.cart.remove(productId);
      setCart(cart);
  };

  const QuantityHandler = async (productId, quantity)=> {
      const {cart} = await commerce.cart.update(productId, { quantity });
      setCart(cart);
  };

  const EmptyCartHandler = async ()=> {
    const {cart} = await commerce.cart.empty();
    setCartIsEmpty(true);
    setCart(cart);
  };

  //====== Checkout Page helpers .
  const GenerateTokenHandler = async (cartId, name)=> {
    const res = await commerce.checkout.generateToken(cartId, { type: name }).then(result => result);
    setTokenId(res);
    setIsCartLoading(false);
  };
  
  const GetAllCountries = async (theToken)=> {
    const {countries}  = await commerce.services.localeListShippingCountries(theToken);;
    setShippingCountries(countries);
    setFirstCountry(Object.entries(countries)[0][1]);
    setCountryCode(Object.keys(countries)[0]);
    GetSubDivisions(Object.keys(countries)[0]);
  };

  const GetSubDivisions = async (country)=> {
    const {subdivisions} = await commerce.services.localeListSubdivisions(country);;
    setShippingSubdivisions(subdivisions);
    GetShippingOptions(TokenId.id, country, Object.keys(subdivisions)[0]);
  }; 

  const HandleSelectedCountryCode = (countryName, countryCode)=> {
    setFirstCountry(countryName);
    setCountryCode(countryCode);
    if(countryCode) GetSubDivisions(countryCode);
  };

  const GetShippingOptions = async(checkoutId, country, region = null)=> {
    const options = await commerce.checkout.getShippingOptions(checkoutId, {country, region});
    setShippingOptionsData(options);
    setIsCheckoutLoading(false);
  };

  const ActiveStepHandler = (stepType)=> {
    if(stepType === 'next') {
      setActiveStep((prev)=> prev + 1);
    } else if(stepType === 'prev') {
      setActiveStep((prev)=> prev - 1);
    } else {
      setActiveStep(0);
    }
  };

  const SubmitDataHandler = (data, dataInfo, stepAction)=> {
    if(dataInfo === 'personalInfo') {
      setPersonalInfoData(data);
    } else {
      setAllData({...data, ...PersonalInfoData});    
    };    
    ActiveStepHandler(stepAction);
  };

  const RefreshCartHandler = async ()=> setCart(await commerce.cart.refresh());

  //========= Favorite Page Handler
  const AddToFavorites = (FavoriteProducts)=> {
    setAllFavoritesContent((prevFavorites)=> {
        return prevFavorites.concat(FavoriteProducts);
    });
  };

  const SetAllFavoritesHandler = (value)=> setAllFavoritesContent(value);

  const RemoveFavoriteItem = (ProductId)=> {
    setAllFavoritesContent((prevFavorites)=> {
        return prevFavorites.filter((product) => product.id !== ProductId);
    });
  };

  const ItemIsFavorite = (productId)=> {
    const FavStatus = AllFavoritesContent.some((product)=> product.id === productId);
    return FavStatus;
  };


  //======== Set Api Theme Color Depend Mode Staus.
  const customTheme = createTheme({
    palette: {
      colors: {
        mainBg: DarkModeStatus?'#dadcde' :'#000',
        secondBg: DarkModeStatus?'#cfd0d4' :'#262626',
        textColor: DarkModeStatus?'#000' :'#fff',
        primary: DarkModeStatus?'#191654' :'#fcbc73',
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },

    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: '21px',
            padding: '5px 10px',
            color: DarkModeStatus?'#fff' :'#000',
            backgroundColor: DarkModeStatus?'#191654' :'#fcbc73',
          },
        },
      },
    },

    
  });

  //========= All Required Data & Functions On The App.
  const context = {
    AllProducts,
    TargetProduct,
    AllCategoryNames,
    FirstCategoryName,
    Cart,
    CartIsEmpty,
    IsProductsLoading,
    IsProductLoading,
    IsCartLoading,
    IsCheckoutLoading,
    ShippingCountries,
    FirstCountry,
    CountryCode,
    ShippingSubdivisions,
    ShippingOptionsData,
    ActiveStep,
    AllData,
    SearchValue,
    DarkModeStatus,
    TokenId,
    customTheme,
    GetProductById: GetProductByIdHandler,
    GetAllCategoryNames: AllCategoryNamesHandler,
    GetProductsByCategory: GetProductsByCategoryHandler,
    SetFirstCategoryName: SetFirstCategoryNameHandler,
    RetriveProduct: ProductRetrieveHandler,
    GetCartStatus: CheckCartHandler,
    SetCartEmptyStatus: CartChangeStatus,
    AddToCart: AddToCartHandler,
    RemoveProduct: RemoveProductHandler,
    Quantity: QuantityHandler,
    EmptyCart: EmptyCartHandler,
    GenerateToken: GenerateTokenHandler,
    AllCountries: GetAllCountries,
    SelectedCountryCode: HandleSelectedCountryCode,
    Subdivisions: GetSubDivisions,
    ShippingOptions: GetShippingOptions,
    SetActiveStep: ActiveStepHandler,
    SetSubmitData: SubmitDataHandler,
    NewCart: RefreshCartHandler,
    SetSearchValue: SearchValueHandler,
    SetModeStatus: ModeStatusHandler,
    SetDarkModeStatus: SetDarkModeStatusHandler,
    SetAllFavorites: SetAllFavoritesHandler,
    Favorites: AllFavoritesContent,
    TotalFavorites: AllFavoritesContent.length, 
    AddToFavorites,
    RemoveFavoriteItem,
    ItemIsFavorite,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  )
};

export default Context;