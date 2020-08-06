import React from 'react';
import appConfig from 'appConfig';

let iconLoader = null;
if (__DEVELOPMENT__) {
  iconLoader = name => function IconSvg() {
    const logo = require(`./svg/${name}.svg`).default;
    const href = __DEVELOPMENT__ ? `#${logo.id}` : logo.url && logo.url.replace(appConfig.assets.cdn, '');
    if (__SERVER__) {
      const regex = /<symbol[^>]*>((.|\s)+?)<\/symbol>/;
      const _svg = logo.content.replace(regex, (match, ...p) => {
        return `${p[0]}`;
      });
      return (
        <svg viewBox={logo.viewBox} className="icon shape-codepen"
             dangerouslySetInnerHTML={{ __html: `${_svg}` }}
        />
      );
    }
    return (
      <svg viewBox={logo.viewBox} className="icon shape-codepen"
           dangerouslySetInnerHTML={{ __html: "<use xlink:href='" + href + "'></use>" }}
      />
    );
  };
} else {
  iconLoader = (name) => {
    return class IconSvg extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          logo: null
        };

        this.loadIcon(name);
      }

      loadIcon = async (name) => {
        try {
          const svg = await import(`./svg/${name}.svg`);
          this.setState({ logo: svg.default });
        } catch(e) {
          console.log(`SVG load error: ${e} \n stack trace is ${e.stack}`);
        }
      };

      render() {
        const { logo } = this.state;
        if (logo) {
          const href = __DEVELOPMENT__ ?
            `#${logo.id}` :
            logo.url && logo.url.replace(appConfig.assets.cdn, '');

          if (__SERVER__) {
            const regex = /<symbol[^>]*>((.|\s)+?)<\/symbol>/;
            const _svg = logo.content.replace(regex, (match, ...p) => {
              return `${p[0]}`;
            });
            return (
              <svg viewBox={logo.viewBox} className="icon shape-codepen"
                   dangerouslySetInnerHTML={{
                     __html: `${_svg}`
                   }}
              />
            );
          }

          return (
            <svg viewBox={logo.viewBox} className="icon shape-codepen"
                 dangerouslySetInnerHTML={{ __html: "<use xlink:href='" + href + "'></use>" }}
            />
          );
        } else {
          return null;
        }
      }
    };
  };
}

export const CabTransfer = iconLoader('CabTransfer'),
  Drinks = iconLoader('DrinkIcon'),
  Flight = iconLoader('FlightIcon'),
  GooglePlay = iconLoader('GooglePlay'),
  AppStore = iconLoader('AppStore'),
  Meal = iconLoader('Meal'),
  TTlogo = iconLoader('TTlogo'),
  TTlogoSecondary = iconLoader('TTlogoSecondary'),
  HouseBoat = iconLoader('HouseBoatIcon'),
  SortIcon = iconLoader('SortIcon'),
  FilterIcon = iconLoader('FilterIcon'),
  StarIcon = iconLoader('StarIcon'),
  StarIconEmpty = iconLoader('StarIconEmpty'),
  IndianIcon = iconLoader('IndianIcon'),
  InternationalIcon = iconLoader('InternationalIcon'),
  IllusAgent = iconLoader('IllusAgent'),
  IllusMoneySafe = iconLoader('IllusMoneySafe'),
  IllusSupport = iconLoader('IllusSupport'),
  IllusTraveler = iconLoader('IllusTraveler'),
  PdpQuotes = iconLoader('PdpQuotes'),
  PdpSelectPackage = iconLoader('PdpSelectPackage'),
  IllusDestination = iconLoader('IllusDestination'),
  LookingIcon = iconLoader('LookingIcon'),
  InfoIcon = iconLoader('InfoIcon'),
  BlueDownArrow = iconLoader('BlueDownArrow'),
  ProfileIcon = iconLoader('ProfileIcon'),
  HomeIcon = iconLoader('HomeIcon'),
  VactionIcon = iconLoader('VactionIcon'),
  HoneymoonPackages = iconLoader('HoneymoonPackages'),
  FamilyIcon = iconLoader('FamilyIcon'),
  TravelerMain = iconLoader('TravelerMain'),
  WeekendIcon = iconLoader('WeekendIcon'),
  WorkIcon = iconLoader('WorkIcon'),
  OffersIcon = iconLoader('OffersIcon'),
  IndianIconBlack = iconLoader('IndianIconBlack'),
  InternationalIconBlack = iconLoader('InternationalIconBlack'),
  BlogIcon = iconLoader('BlogIcon'),
  TestimonailsIcon = iconLoader('TestimonailsIcon'),
  FAQIcon = iconLoader('FAQIcon'),
  ContactIcon = iconLoader('ContactIcon'),
  CloseIcon = iconLoader('CloseIcon'),
  CustomPackage = iconLoader('CustomPackage'),
  ChatIcon = iconLoader('ChatIcon'),
  ChatIconWhite = iconLoader('ChatIconWhite'),
  CallUs = iconLoader('CallUs'),
  CallBackIcon = iconLoader('CallBackIcon'),
  Confusion = iconLoader('Confusion'),
  Help = iconLoader('Help'),
  DownArrow = iconLoader('DownArrow'),
  FBIcon = iconLoader('FBIcon'),
  GoogleIcon = iconLoader('GoogleIcon'),
  LockIcon = iconLoader('LockIcon'),
  TicketsIcon = iconLoader('TicketsIcon'),
  ArrowNext = iconLoader('ArrowNext'),
  LocationMarkerIcon = iconLoader('LocationMarkerIcon'),
  CalendarIcon = iconLoader('CalendarIcon'),
  BudgetIcon = iconLoader('BudgetIcon'),
  CabIconFront = iconLoader('CabIconFront'),
  Back2Icon = iconLoader('Back2Icon'),
  NextIcon = iconLoader('NextIcon'),
  CloseDark = iconLoader('CloseDark'),
  DualTone = iconLoader('DualTone'),
  IllusRequestCallback = iconLoader('IllusRequestCallback'),
  Illus404 = iconLoader('Illus404'),
  IllusDestinationsOld = iconLoader('IllusDestinationsOld'),
  IllusDestinations = iconLoader('IllusDestinations'),
  IllusQualityCheck = iconLoader('IllusQualityCheck'),
  IllusForgotPassword = iconLoader('IllusForgotPassword'),
  IllusThanksRequest = iconLoader('IllusThanksRequest'),
  AllTrips = iconLoader('AllTrips'),
  Weekendmeal = iconLoader('Meal'),
  Trekking = iconLoader('TrekkingIcon'),
  Rafting = iconLoader('RaftingIcon'),
  Paragliding = iconLoader('ParaIcon'),
  Rockclimbing = iconLoader('RockClimbingIcon'),
  Flyingfox = iconLoader('FlyingFoxIcon'),
  Repelling = iconLoader('RepellingIcon'),
  Bonfire = iconLoader('BonFireIcon'),
  Music = iconLoader('MusicIcon'),
  Dj = iconLoader('DJIcon'),
  Jeepsafari = iconLoader('JeepIcon'),
  Swimming = iconLoader('SwimmingPoolIcon'),
  Photography = iconLoader('CameraIcon'),
  Deluzeacbus = iconLoader('BusIcon'),
  Tempotraveler = iconLoader('MinIBusIcon'),
  Sharedcoach = iconLoader('BusIcon'),
  Transport = iconLoader('MinIBusIcon'),
  Luxurycamp = iconLoader('CampIcon'),
  Eveningsnack = iconLoader('EveningSnacksIcon'),
  Jumping = iconLoader('SkyDvieIcon'),
  Prasailing = iconLoader('ParaSellingicon'),
  Livemusic = iconLoader('MusicIcon'),
  MealPlanforHotel = iconLoader('Meal'),
  Meals = iconLoader('Meal'),
  Hotel = iconLoader('HotelIcon'),
  Sightseeing = iconLoader('SightseeingIcon'),
  Cab = iconLoader('CabIconFront'),
  SharedCoach = iconLoader('CabTransfer'),
  Complimentarydrinks = iconLoader('DrinkIcon'),
  Flights = iconLoader('FlightIcon'),
  Houseboat = iconLoader('HouseBoatIcon'),
  Cruise = iconLoader('CruiseIcon'),
  JetSkiTransfer = iconLoader('JetSkiIcon'),
  Safari = iconLoader('SafariIcon'),
  Watersports = iconLoader('WaterActivities'),
  Adventure = iconLoader('Adventure'),
  Visa = iconLoader('VisaIcon'),
  FerryTransfer = iconLoader('FerriIcon'),
  Cake = iconLoader('CakeIcon'),
  FloralDecoration = iconLoader('FloralDecorationIcon'),
  Campstay = iconLoader('CampIcon'),
  Entrytickets = iconLoader('TicketsIcon'),
  HomeStay = iconLoader('HotelIcon'),
  JeepSafari = iconLoader('JeepIcon'),
  TreeHouse = iconLoader('TreeHouseIcon'),
  Disneyland = iconLoader('DisneyLandIcon'),
  ReligiousTour = iconLoader('ReligiousIcon'),
  Transfer = iconLoader('CabTransfer'),
  Simcard = iconLoader('SimCardIcon'),
  CloseWhite = iconLoader('CloseWhite'),
  NotificationBell = iconLoader('NotificationBell'),
  ShareIcon = iconLoader('ShareIcon'),
  PackageIcon = iconLoader('PackageIcon'),
  CompareIcon2 = iconLoader('CompareIcon2'),
  CompareIconWhite = iconLoader('CompareIconWhite'),
  Uniquerequirements = iconLoader('Uniquerequirements'),
  Seasonal = iconLoader('SeasonalIcon'),
  GreenTick = iconLoader('GreenTick'),
  Envelope = iconLoader('Envelope'),
  ThankYouTick = iconLoader('ThankYouTick'),
  Default = iconLoader('DefaultIcon'),
  Activities = iconLoader('TrekkingIcon'),
  AdoutDestinationIcon = iconLoader('AdoutDestinationIcon'),
  AgentIcon = iconLoader('AgentIcon'),
  AndroidIcon = iconLoader('AndroidIcon'),
  AttachmentIcon = iconLoader('AttachmentIcon'),
  Autumn = iconLoader('Autumn'),
  BackIcon = iconLoader('BackIcon'),
  Back2IconWhite = iconLoader('Back2IconWhite'),
  BackTopArrow = iconLoader('BackTopArrow'),
  BeachIconGrey = iconLoader('BeachIconGrey'),
  BudgetIconNew = iconLoader('BudgetIconNew'),
  BusIllus = iconLoader('BusIllus'),
  CabIconFrontGrey = iconLoader('CabIconFrontGrey'),
  CallUsWhite = iconLoader('CallUsWhite'),
  CallUsWhiteFill = iconLoader('CallUsWhiteFill'),
  Clock = iconLoader('Clock'),
  ComparePackage = iconLoader('ComparePackage'),
  CustomisedPackages = iconLoader('CustomisedPackages'),
  DefaultIcon = iconLoader('DefaultIcon'),
  DurationIcon = iconLoader('DurationIcon'),
  EmiIcon = iconLoader('EmiIcon'),
  ExclusionIcon = iconLoader('ExclusionIcon'),
  FBIconWhite = iconLoader('FBIconWhite'),
  Ferrytransfer = iconLoader('Ferrytransfer'),
  FilterIconWhite = iconLoader('FilterIconWhite'),
  Friends = iconLoader('Friends'),
  GoogleIconWhite = iconLoader('GoogleIconWhite'),
  GymIcon = iconLoader('GymIcon'),
  HalfStar = iconLoader('HalfStar'),
  HillStation = iconLoader('HillStationIcon'),
  HillStationIcon = iconLoader('HillStationIcon'),
  HillStationIconGrey = iconLoader('HillStationIconGrey'),
  History = iconLoader('History'),
  HotelEmptyState = iconLoader('HotelEmptyState'),
  HotelDefaulImg = iconLoader('HotelDefaulImg'),
  InclusionIcon = iconLoader('InclusionIcon'),
  IndianIconGrey = iconLoader('IndianIconGrey'),
  Instagram = iconLoader('Instagram'),
  IOS = iconLoader('IOS'),
  KeyboardActive = iconLoader('KeyboardActive'),
  KeyboardInactive = iconLoader('KeyboardInactive'),
  LinkedIn = iconLoader('LinkedIn'),
  LockWhite = iconLoader('LockWhite'),
  LoveIcon = iconLoader('LoveIcon'),
  MailIconWhite = iconLoader('MailIconWhite'),
  MessageIconNew = iconLoader('MessageIconNew'),
  MobileIcon = iconLoader('MobileIcon'),
  Monsoon = iconLoader('Monsoon'),
  MountainIcon = iconLoader('MountainIcon'),
  Nature = iconLoader('NatureIcon'),
  NatureIcon = iconLoader('NatureIcon'),
  NatureIconGrey = iconLoader('NatureIconGrey'),
  NotificationIcon = iconLoader('NotificationIcon'),
  PhoneIconWhite = iconLoader('PhoneIconWhite'),
  PinterestIcon = iconLoader('PinterestIcon'),
  PriceIcon = iconLoader('PriceIcon'),
  Religious = iconLoader('ReligiousIcon'),
  FriendsAndGroups = iconLoader('ReligiousIcon'),
  RestaurantIcon = iconLoader('RestaurantIcon'),
  RoomServiceIcon = iconLoader('RoomServiceIcon'),
  SearchBlack = iconLoader('SearchBlack'),
  Ship = iconLoader('Ship'),
  StatusCrossIcon = iconLoader('StatusCrossIcon'),
  StatusSuccessIcon = iconLoader('StatusSuccessIcon'),
  StepArrow = iconLoader('StepArrow'),
  Summer = iconLoader('Summer'),
  TaxiCab = iconLoader('TaxiCab'),
  Train = iconLoader('Train'),
  TTIcon = iconLoader('TTIcon'),
  Twitter = iconLoader('Twitter'),
  TwitterGrey = iconLoader('TwitterGrey'),
  Visa2 = iconLoader('Visa'),
  WaterActivities = iconLoader('WaterActivities'),
  WaterActivitiesGrey = iconLoader('WaterActivitiesGrey'),
  WeatherIcon = iconLoader('WeatherIcon'),
  WifiIcon = iconLoader('WifiIcon'),
  Winter = iconLoader('Winter'),
  DiamondIcon = iconLoader('DiamondIcon'),
  WebsiteIconNew = iconLoader('WebsiteIconNew'),
  AirConditioningIcon = iconLoader('AirConditioningIcon'),
  Bar = iconLoader('BarIcon'),
  Beachaccess = iconLoader('BeachAccessIcon'),
  FreeBreakfast = iconLoader('BreakfastIconNew'),
  BusinessCenter = iconLoader('BusinessCentreIcon'),
  HChildFriendly = iconLoader('ChildFriendlyIcon'),
  EmailIcon = iconLoader('EmailIcon'),
  Golfcourse = iconLoader('GolfIcon'),
  Fitnesscenter = iconLoader('GymIconNew'),
  HotTub = iconLoader('HotTubIcon'),
  Kitcheninsomerooms = iconLoader('KitchenIcon'),
  LaundryService = iconLoader('LaundryIcon'),
  LocationIcon = iconLoader('LocationIcon'),
  Freeparking = iconLoader('ParkingIcon'),
  PetFriendly = iconLoader('PetFriendlyIcon'),
  PhoneIcon = iconLoader('PhoneIcon'),
  OutdoorPool = iconLoader('PoolIcon'),
  Restaurant = iconLoader('RestaurantIconNew'),
  RoomService = iconLoader('RoomServiceIconNew'),
  AirportShuttle = iconLoader('ShuttleIcon'),
  Smokefree = iconLoader('SmokeFreeIcon'),
  Spa = iconLoader('SpaIcon'),
  WalletIcon = iconLoader('WalletIcon'),
  TTRecommendedIcon = iconLoader('TTRecommendedIcon'),
  BulbIcon = iconLoader('BulbIcon'),
  SearchIcon = iconLoader('SearchIcon'),
  WhatsAppIcon = iconLoader('WhatsAppIcon'),
  TajMahalIcon = iconLoader('TajMahalIcon'),
  AdvantureIconNew = iconLoader('AdvantureIconNew'),
  PlusInclusionIcon = iconLoader('PlusInclusionIcon'),
  IntentExplore = iconLoader('IntentExplore'),
  WhiteShareIcon = iconLoader('ShareWhite'),
  LandlineIcon = iconLoader('LandlineIcon'),
  DownloadVoucherIcon = iconLoader('DownloadVoucherIcon'),
  EditPreferencesIcon = iconLoader('EditPreferencesIcon'),
  HeadphoneIcon = iconLoader('HeadphoneIcon'),
  HeadphoneIconWhite = iconLoader('HeadphoneIconWhite'),
  ShareWhite = iconLoader('ShareWhite'),
  ShareBlack = iconLoader('ShareBlack'),
  NotificationIconWhite = iconLoader('NotificationIconWhite'),
  DownloadBlack = iconLoader('DownloadBlack'),
  DownloadBlue = iconLoader('DownloadBlue'),
  IllusProgressB = iconLoader('IllusProgressB'),
  GmailIcon = iconLoader('GmailIcon'),
  DateDecided = iconLoader('DateDecided'),
  DateNotDecided = iconLoader('DateNotDecided'),
  BudgetLow = iconLoader('BudgetLow'),
  BudgetMedium = iconLoader('BudgetMedium'),
  BudgetHigh = iconLoader('BudgetHigh'),
  Travelers = iconLoader('Travelers'),
  Contact = iconLoader('Contact'),
  Destination = iconLoader('Destination'),
  LeftRedArrow = iconLoader('LeftRedArrow'),
  RightWhiteArrow = iconLoader('RightWhiteArrow'),
  DisabledArrowLeft = iconLoader('DisabledArrowLeft'),
  HotelFilled = iconLoader('HotelFilled'),
  FlightFilled = iconLoader('FlightFilled'),
  CabsFilled = iconLoader('CabsFilled'),
  BudgetMin = iconLoader('BudgetMin'),
  Tick = iconLoader('Tick'),
  PartPay = iconLoader('PartPay'),
  Successful = iconLoader('Successful'),

  // QDP new Icons
  RequestIcon = iconLoader('RequestIcon'),
  PreferencesIcon = iconLoader('PreferencesIcon'),
  InclusionsNewIcon = iconLoader('InclusionsNewIcon'),
  ExclusionsNewIcon = iconLoader('ExclusionsNewIcon'),
  TnCIcon = iconLoader('TnCIcon'),
  InfoBlackIcon = iconLoader('InfoBlackIcon'),
  ItineraryIcon = iconLoader('ItineraryIcon'),
  TravelInfoIcon = iconLoader('TravelInfoIcon'),
  SuccessIllustration = iconLoader('SuccessIllustration'),
  BriefcaseWhiteIcon = iconLoader('BriefcaseWhiteIcon'),
  FamilyWhiteIcon = iconLoader('FamilyWhiteIcon'),
  HoneymoonWhiteIcon = iconLoader('HoneymoonWhiteIcon'),
  TriangleIcon = iconLoader('TriangleIcon'),
  ProgressIcon = iconLoader('ProgressIcon'),
  ProcessedIcon = iconLoader('ProcessedIcon'),
  EnvelopeIcon = iconLoader('EnvelopeIcon'),
  PlayIcon = iconLoader('PlayIcon'),
  CompareIcon = iconLoader('CompareIcon'),
  ChatIconGrey = iconLoader('ChatIconGrey'),
  LuxuryPackageIcon = iconLoader('LuxuryPackageIcon'),
  BlackShareIcon = iconLoader('Black-share-icon'),
  QuotesReceivedIcon = iconLoader('QuotesReceivedIcon'),
  NoQuotesReceivedIcon = iconLoader('NoQuotesReceivedIcon'),
  OutlineStarIcon = iconLoader('OutlineStarIcon'),
  FillStarIcon = iconLoader('FillStarIcon'),
  QualityQuotesIcon = iconLoader('QualityQuotesIcon'),
  RightGreyArrow = iconLoader('RightGreyArrow'),
  CloseIconWhite = iconLoader('CloseIconWhite'),
  CrossRed = iconLoader('CrossRed'),
  GreenTickInclusion = iconLoader('GreenTickInclusion'),
  ExclusionsRed = iconLoader('ExclusionsRed'),
  PriceRupee = iconLoader('PriceRupee'),
  MktAgents = iconLoader('MktAgents'),
  MktDestinations = iconLoader('MktDestinations'),
  MktVerified = iconLoader('MktVerified'),
  MktQualityControl = iconLoader('MktQualityControl'),
  MktSupport = iconLoader('MktSupport'),
  MktSelectPackage = iconLoader('MktSelectPackage'),
  MktQuotes = iconLoader('MktQuotes'),
  MktTravelers = iconLoader('MktTravelers'),
  ProfileIcon2 = iconLoader('ProfileIcon2'),
  ThumbsUp = iconLoader('thumbsUp'),
  ThumbsDown = iconLoader('thumbsDown'),
  RightGrey =  iconLoader('RightGrey'),
  PaymentCancel = iconLoader('PaymentCancel'),
  EllipsisLoader = iconLoader('EllipsisLoader'),
  RatingIcon = iconLoader('RatingIcon');
