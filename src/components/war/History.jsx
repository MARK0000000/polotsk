import React, {useEffect} from 'react'
import profileImg from '../../img/profile/history.jpg'
import imgDefense1 from '../../img/photoGallery/defense/1.jpg'
import imgDefense2 from '../../img/photoGallery/defense/2.jpg'
import imgDefense3 from '../../img/photoGallery/defense/3.jpg'
import imgDefense4 from '../../img/photoGallery/defense/4.jpg'
import imgUnderground from '../../img/photoGallery/underground.jpg'
import img2 from '../../img/photoGallery/item27.jpg'
import img3 from '../../img/photoGallery/партизаны.jpg'
import img4 from '../../img/photoGallery/liberation.jpg'
export default function History() {

  return (
    <section className='history'>
    <h2 className="history__title"  id='history'>ПОЛОЦК ВО ВРЕМЕНА ВЕЛИКОЙ ОТЕЧЕСТВЕННОЙ ВОЙНЫ</h2>
    <hr className="history__hr" />
    <div className="history__content">
      <article className="history__article">
        <h3 className="history__subTitle">Начало Войны</h3>
        <p className="history__text">…Июнь 1941 года. Успешно сданы выпускные экзамены, и уже вчерашние 10-классники 1-й средней Полоцкой школы взволнованно готовятся к выпускному вечеру, полные надежд и планов на будущее. Но пышному балу, назначенному на 23 июня, не суждено было состояться: накануне, 22-го, в воскресенье, из всех полоцких динамиков прозвучало, как приговор, страшное слово «война»… Получив аттестаты в строгой обстановке, многие выпускники сразу отправились на призывной пункт военкомата. Утром 27 июня гитлеровские подразделения, двигавшиеся в сторону города с целью захвата мостов через Западную Двину, встретили яростный отпор воинов 390-го артполка. В этот же день в город начали прибывать эшелоны 174-ой стрелковой дивизии во главе с полковником Алексеем Ивановичем Зыгиным, который принял командование Полоцким гарнизоном. Дивизия упорно удерживала плацдарм на левом берегу Западной Двины, пресекая яростные попытки гитлеровцев форсировать реку на подступах к Полоцку. Благодаря огромной энергии и организаторской работе полковника А.И. Зыгина и его штаба, коменданта Ура полковника Н.С. Дэви Полоцкий УР был приведен в боевую готовность. 3 июля УР и Полоцк подверглись массированной бомбардировке с воздуха. Попытайтесь хоть на секунды представить себе тот ужас, который пережили жители нашего прекрасного, мирного, утопающего в зелени города: фашистские самолеты идут гудящими волнами несколько часов подряд, бомбы летят на железнодорожный узел, промышленные здания, жилые дома, школы, детские сады, гибнут дети, женщины, старики, повсюду слышны крики, детский плач, стоны раненых… Вот так писал об этом в своем дневнике довоенный директор нашей школы Иван Прокопович Гарбуков: «3 июля 1941 г. Какой это страшный день! В 10 часов утра в небе над городом появились вражеские самолеты. Я побежал к райисполкому, но рядом с ним разорвалась бомба. Еще одна бомба упала около райкома партии. Я упал на мостовую и пополз. Собрал все силы, поднялся и побежал к подвалу под зданием прокуратуры. Там было очень много раненых. После бомбежки я увидел страшную картину разрушений. Многие дома и предприятия горели.» Так полочане впервые испытали на себе огненное коварство войны.</p>
        <hr className="history__hr" />
      </article>

      <article className="history__article">
        <h3 className="history__subTitle">Оборона</h3>
        <div className="history__img-box">
          <img src={imgDefense1} alt="" className="history__imgGridItem_vertical" />
          <img src={imgDefense2} alt="" className="history__imgGridItem" />
          <img src={imgDefense4} alt="" className="history__imgGridItem_vertical" />
          <img src={imgDefense3} alt="" className="history__imgGridItem" />
        </div>
        <p className="history__text">
          С утра 11 июля немецкие части продолжили наступление на боровухском направлении, пытаясь развить первоначальный успех. К исходу дня все резервы защит­ников Полоцкого боевого участка бы­ли введены в бой, но восстановить по­ложение в направлении Боровухи-1 не удалось. В течение последующих 3-х дней (11, 12, 13 июля), противник наносил удары в северном секторе, а с 15 июля — в южном секторе Полоцкого УРа. <br />
          Бои за Полоцк 12—13 июля были исклю­чительно ожесточенными. Враг, располагавший огромным превос­ходством, 13 июля прорвал оборону на­ших войск север­нее Полоцка и на­чал стремительно продвигаться к Невелю, не пре­кращая, тем не менее, атак на боровухском нап­равлении. Про­рыв Полоцкого УРа в этом месте дал бы 3-й танко­вой группе наи­кратчайшие пути снабжения, кото­рых ей так не хватало в разгар Смоленского сражения. <br />
          <br />
          14 июля части 174-й стрелковой ди­визии продолжали удерживать Полоцкий укрепленный район, отбивая атаки противника в направлении Боровухи.
          <br />
          К южному фасу укрепрайона основные силы немцев стали подходить 12 июля со стороны местечка Поставы.На острие атаки у местечка Гомель выдвигался 2-й батальон 18-го пехотно­го полка, усиленный полковой, диви­зионной и корпусной артиллерией. 15 июля в 4.00 немецкие войска начали интен­сивную артподготовку, в ходе которой местечко Гомель было буквально стер­то с лица земли. Основной огонь немецкой артилле­рии был сосредоточен на 2-х ДОТах пер­вой линии. В течение часа десятки ору­дий расстреливали их в упор. <br />
          В 5.00 орудия перенесли свой огонь вглубь обороны 61-го УРа и 508-го стрелкового полка 174-й стрелковой ди­визии и в атаку пошли штурмующие группы 9-й и 10-й пехотных рот 2-го пе­хотного батальона. Неожиданно для атакующих от­крыл пулеметный огонь один из ДОТов первой линии. Его поддержали ДОТы второй линии и полковая артиллерия 508-го стрелкового полка. Бой затянулся. Только уничтожив часть бойцов 508-го стрелкового полка, а другую часть заставив отступить и по­неся при этом потери, немецкие штур­мующие группы приступили к осаде ДОТов. Применяя огнеметы и подрыв­ные заряды, 18-й пехотный полк немцев к 13.00 уничтожил 5 долговременных точек и прорвал оборону советских войск. <br />
          <br />
          В этот же день части 23-го армейско­го корпуса немцев с севера прорвались к Полоцку в районе Боровухи 2-й. К ис­ходу дня, 15 июля, немецким войскам удалось за­нять левобережную часть Полоцка. <br />
          <br />
          Глубокие фланговые прорывы гит­леровцев поставили в крайне трудное положение 174-ю стрелковую дивизию и всю 22-ю армию. В создавшейся обстановке Военный совет 22-й армии вы­нужден был отдать комбригу А. И. Зыгину приказ на отход в сторону Вели­ких Лук.
        </p>
        <hr className="history__hr" />
      </article>

      <article className="history__article">
        <h3 className="history__subTitle">Оккупация</h3>
        <img src={img2} alt="" className="history__img" />
        <p className="history__text">
          16 июля в Полоцк вошли немецкие солдаты, для полочан, оставшихся в городе, начался 3-летний период оккупации – страшное время унижения, издевательств, голода и смерти. Для содержания военнопленных были созданы лагеря: пересыльный лагерь №125 в Полоцке и стационарный лагерь №354 в Боровухе. Военнопленные умирали в них от болезней и голода. В городе лагерь был недолго, а Спасский существовал все время, в нем стали помещать и гражданских лиц. В 1941 и 1942 гг. было очень много заключенных в этом лагере, жители рассказывают, что заключенные не помещались в сараях и зданиях городка, из лагеря все время несся гул голосов и криков, заключенных почти не кормили, не хватало воды. Обезумевшие от голода и жажды люди кидались на привозимую баланду или воду, немецкая охрана открывала по ним огонь и наводила порядок. В лагере была большая смертность от голода и болезней: тифа, дизентерии и др. Хоронили тут же в лагере, в оврагах. Кроме того расстреливали за малейшее неподчинение, за попытки к бегству и пристреливали всех ослабевших и не могущих идти на работу. Из этого лагеря подпольщики и партизаны организовывали побеги военнопленных. Местные жители выкупали из лагеря своих родных за продукты или ценные вещи. В лагерях проводили вербовку военнопленных в армию Власова, в полицию, гестапо и шпионские школы. Эта вербовки особого успеха не имела, но некоторые поступали в часть Власова с тем, чтобы вырваться из лагеря, а затем бежать из власовских частей в партизанские отряды. <br />
          <br />
          Военнопленных гоняли на работы, работали на создании укрепленных районов в городе и около него, на ремонте и строительстве дорог, устройстве бункеров, укрытий для машин, огневых точек, расчистке завалов после бомбежек и т.п. Падающих на марше или на работе расстреливали на месте. Хоронили их тут же при дороге. <br />
          Через 2-3 недели после оккупации города было создано еврейское гетто. <br />
          Гетто было огорожено колючей проволокой. Осенью 1941 года все евреи из гетто были переведены в сараи кирпичного завода, имущество было реквизировано немцами и полицией. И через несколько дней всех евреев вывели с кирпичного завода к песчаным сопкам у Боровухи-II, где были уже вырыты траншеи и всех расстреляли: стариков, старух, детей и взрослых. <br />
          Жители рассказывают, что это было ужасное зрелище, когда они шли на расстрел, стояли крики, плач, поддерживали друг друга, старики пели молитвы и поддерживали дух других. Было уничтожено, как говорят, около 9000 человек. Многие из погибших могли уйти в тыл до прихода немцев, но некоторые из них не верили в жестокость фашистов и думали, что это те же немцы, которые оккупировали Полоцк в 1918 году, когда немцы не преследовали евреев, евреи свободно на своем жаргоне объяснялись с ними, вели торговлю и т.п. Думали, что и теперь будет так, но вышло иначе. <br />
          Всего за годы оккупации в полоцких лагерях было уничтожено около 200 тысяч человек. В городе была введена всеобщая трудовая повинность для жителей в возрасте от 14 до 65 лет. Самовольно покидать рабочее место запрещалось. Отказ от выполнения трудовых обязанностей или их недобросовестное исполнение карались по законам военного времени.        
        </p>
        <hr className="history__hr" />
      </article>
      
      {/* <article className="history__article">
        <h3 className="history__subTitle">Героическая борьба подпольщиков и партизан</h3>
        <img src={img2} alt="" className="history__img" />
        <p className="history__text">Но, несмотря на жестокие условия гитлеровского оккупационного режима, дух полочан и их воля к победе над врагом не были сломлены. Сразу после захвата Полоцка в городе начала разворачиваться борьба против оккупантов. Огромную помощь партизанам оказывали подпольщики. Командир партизанской бригады, бывший ученик нашей школы Дмитрий Васильевич Тябут так вспоминал о событиях, происходивших в конце 1943 г.: «Утром в штаб бригады пришло донесение из Полоцка. Наши подпольщики сообщали, что на станцию прибыл эшелон с живой силой и танками… Машинист и диспетчер, связанные с подпольщиками, сообщили время отправления эшелона и его направление. Эшелон обязательно нужно было взорвать. Выполнение этого задания было поручено подрывникам во главе с Николаем Павловым. Операция была блестяще выполнена, но сам Николай погиб». Активное участие в деятельности подпольщиков и партизанском движении принимали учителя и выпускники нашей школы, память о которых бережно хранит экспозиция школьного музея.</p>
        <p className="history__text_quote">
        «Пред памятью павших героев <br />
        Здесь скажем, что мужество есть, <br />
        Что встать мы готовы горою <br />
        За Родину, волю и честь» <br />
        </p>
        <p className="history__text">Эти проникновенные строки о себе и своих одноклассниках, вчерашних мальчишках и девчонках, написала выпускница 1941 г. Надежда Платоновна Ермак
        </p>
        <img src={profileImg} alt="" className="history__img_quote" />
      </article> */}

      {/* <article className="history__article">
        <h3 className="history__subTitle">Полочане – Герои Советского союза</h3>
        <img src={img3} alt="" className="history__img" />
        <p className="history__text">Прошло уже 70 лет, а 4 июля остается по-прежнему одним из главных праздников в Полоцке: в этот незабываемый день наш город пережил свое второе рождение. Сегодня древний Полоцк, восставший из руин и пепла, уверенно смотрит в будущее, храня светлую память о воинах, ценой жизни защитивших мир от коричневой чумы. Здесь каждая пядь земли обагрена кровью героев. Здесь каждый шаг отзывается эхом Священной войны. Вглядитесь в пламя Вечного огня на кургане бессмертия, насыпанном руками полочан, помолчите у скромного обелиска, положите цветы на могилу с надписью «Неизвестный», поклонитесь воинам-освободителям у их могил на центральной площади. И, возможно, ваше сердце застучит сильнее, и сами собой появятся стихи, как они рождаются у нас – школьников, не видевших войны:</p>
        <p className="history__text_quote">
        Нет, не просто свобода досталась,<br />
        Скорбь навечно оделась в гранит: <br />
        Над Двиной журавлиная стая <br />
        Души павших героев хранит, <br />
        Мы им тоже поклонимся низко, <br />
        Тем, кто Полоцк сумел защитить, <br />
        И цветы принесем к обелиску, <br />
        Чтобы памятью мир укрепить.
        </p>
      </article> */}

      <article className="history__article">
        <h3 className="history__subTitle">Подполье</h3>
        <img src={imgUnderground} alt="" className="history__img" />
        <p className="history__text">
          Ни зверства, ни фашистская пропаганда не помогли захватчикам. Советские люди не примирились с фашистским "новым порядком". Они организовывали сопротивление врагу, включались и активную борьбу с ним. В оккупированном городе коммунисты приступили к созданию подпольных организаций и начали работу среди населения города и района по развертыванию партизанского движения. <br />
          Организатором одной из первых подпольных патриотических групп в городе стал бывший заведующий Полоцким роно, капитан пограничных войск коммунист С. В. Суховей. Активными членами этой группы были Ф. К. Безер, А. Ф. Шрамко, Д. И. Клепиков, Н. А. Мание, Ф. Н. Лоевский и др. Группа ставила целью собирать сведения о противнике. Каждый ее член получил определенное задание. С. В. Суховей следил за расположением и переброской воинских частей, строительством фортификационных сооружении. С этой целью он пошел работать в городскую управу, где сумел войти в доверие к оккупантам и вскоре был назначен сельским бургомистром Полоцкого района. Он информировал подпольную группу о намерениях фашистских властей. о местах дислокации вражеских частей и расположении военных объектов, снабжал подпольщиков пропусками, помогал арестованным, способствовал их освобождению. С. В. Суховей направлял работу подпольной группы пос. Труды, которую возглавлял Г. И. Чертков. В группу входили А. Марченко, Н. Павловский, И. Антонов, И. Жак, Ю. Журова. Большинство участников группы составило ядро партизанского отряда, созданного в мае 1942 г. во главе с А. Марченко. <br />
          <br />
          Активное участие в этой группе принимала комсомолка И. Г. Полозова. Когда подпольщики уходили в лес, Ира не могла уйти вместе с ними в связи с болезнью. Ее оставили связной. Она собирала разведданные, добывала медикаменты и все это доставляла в отряд. Вскоре оккупанты напали на ее след и арестовали, пытали и издевались над ней. На каждый вопрос палачей Ира отвечала пением "Интернационала". Когда 27 мая 1942 г. ее привели на расстрел, она воскликнула: "Я погибну, но за мною тысячи таких же девушек, и они отомстят за меня. Кровавый фашизм никогда не победит!" <br />
          <br />
          Всю свою работу участники Полоцкого подполья подчинили задаче развертывания партизанского движения. Они собирали оружие и боеприпасы как в самом городе, так и за его пределами. За город, на места боев, посылались члены организации, которые подбирали оружие и прятали его в тайниках. <br />
          В начале сентября гитлеровцам удалось заслать в подполье провокатора. Н. Т. Козлов и другие подпольщики были арестованы и расстреляны. Этот провал явился большим ударом для подпольщиков. Они извлекли из этого урок и продолжали борьбу еще более усилив конспирацию.  <br />
          Среди организаторов и руководителей патриотических подпольных групп в Полоцке было немало бежавших из фашистского плена командиров и политработников Красной Армии. Все они стремились скорее стать в строй борцов против гитлеровских захватчиков. Старший политрук П. Ф. Самородков, устроившись стрелочником на ст. Громы, организовал одну из первых подпольно-диверсионных групп. <br />
          <br />
          Осенью 1941 г. вокруг него создалось боевое ядро из числа бывших командиров Красной Армии, оказавшихся в Полоцке, и рабочей молодежи, главным образом комсомольцев. Боевыми друзьями П. Ф. Самородкова по формированию отряда стали Я. X. Сташкевич и И. С. Гуков. <br />
          Много сил и энергии отдавали подпольщики Полоцка политической работе среди населения. Они принимали сводки Совинформбюро, размножали их, расклеивали по городу. Благодаря подпольщикам население города узнало о поражении гитлеровских войск под Москвой. На стенах домов появились надписи: "Как вам, господа, понравилась Москва?", "Смерть немецким оккупантам и их пособникам!" и т. п <br />
           <br />
          Под влиянием политической работы и известий об успехах Красной Армии под Москвой все больше советских людей включалось в активную борьбу против гитлеровцев. В течение осенних месяцев подпольщики Я. X. Сташкевич, И. С. Гуков, Е. Г. Рыжик, В. В. Жиганов и другие организовали ряд диверсий. <br />
          На место погибших подпольщиков в строй иступили новые борцы. Подпольщики города связались с военнопленными концентрационного лагеря в Спасском городке, привлекли на свою сторону некоторых лиц из охраны лагеря и осенью 1941 г, освободили из лагеря много пленных командиров и красноармейце". В числе освобожденных были врачи-коммунисты Н. Н. Ковалев, Г. М. Зязин, И. Мороз и др. Вскоре они включились в работу в городской больнице при активном участии бывшей заведующей райздравотделом Н. П. Крупиной. Врачи Г. М. Зязин, Н. Н. Ковалев, С. В. Поликарпов, П. А. Порозов, Ф. К. Козлов и другие спасали советских военнопленных, лечили, кормили, укрывали их у себя, помогали достать документы и избежать фашистского лагеря. <br />
          Боевыми помощниками коммунистов в организации всенародного отпора врагу являлись комсомольские организации. Их деятельностью руководили подпольный райком ЛКСМБ (секретари П. П. Ляпко, И. М. Матвеев, Г. И. Макогин), ответственный организатор Витебского обкома комсомола по Полоцкой зоне А. П. Жавнерко, помощники комиссаров по комсомолу, находившиеся в партизанских отрядах и бригадах. Комсомольские организации создавали подрывные и диверсионные группы, собирали для партизанских отрядов оружие и боеприпасы, продукты питания и одежду, вели среди населения агитационную работу. Отважно сражались против немецко-фашистских захватчиков комсомольцы Федор Максимов, Василий Чувалов и др. <br />
        </p>
        <hr className="history__hr" />
      </article>

      <article className="history__article">
        <h3 className="history__subTitle">Партизанское движение</h3>
        <img src={img3} alt="" className="history__img" />
        <p className="history__text">
          Первую попытку создания партизанского отряда полоцкие патриоты предприняли в районе д. Сухой Бор. П. Е. Гуков связался с группой коммунистов Сестренского сельсовета. В нее входили бывшие работники Полоцкого райкома партии, в том числе П. Хлудков, оставленный по решению райкома для организации партизанского отряда, и местный активист, участник гражданской войны П. Т. Козлов. <br />
          <br />
          Коммунисты Сестренского сельсовета Ф. Бардусов, С. Величко, братья Цаценко и другие во главе с секретарем парторганизации П. Т. Козловым еще 3 июля создали партизанскую базу в районе Заболотье - Кополь. В отряде Н. Т. Козлова было около 40 человек. Когда немецко-фашистские захватчики вторглись на территорию Полоцкого района, партизанский отряд Козлова начал боевые действия. Однако через некоторое время отряд был рассеян. Партизаны временно ушли в подполье. <br />
          <br />
          После установления связи с полоцкими подпольщиками партизаны с новыми силами стали готовиться к развертыванию вооруженной борьбы с врагом. В д. Зеленка, на квартире К. С. Мариненко и его сестры Т. С. Мариненко, и в д. Белое, на квартире П. Хлудкова, были установлены радиоприемники для приема сводок Совинформбюро. Сводки распространялись среди колхозников ближайших деревень, а также передавались в Полоцк. <br />
          Одновременно в районе был создан и второй партизанский отряд во главе с А. Я. Марченко. Группа Марченко поддерживала связь с полоцкими подпольщиками со дня возникновения. Благодаря этому она быстро пополнилась за счет городских рабочих и бежавших из "лагеря смерти" военнопленных. Отряды Я. X. Сташкевича и А. Я. Марченко явились базой создания в Полоцком районе 3-й Белорусской партизанской бригады. <br />
          Райком принял решение улучшить информацию трудящихся о положении на фронтах Отечественной войны и в советском тылу, довести до каждого рабочего и колхозника значение партизанской борьбы в тылу врага. Было выпущено несколько сотен листовок, призывавших население убивать гитлеровцев, уничтожать мосты, связь, машины, идти в партизанские отряды. <br />
          <br />
          "Настал час священной и беспощадной расплаты с кровавым и ненавистным врагом - немецкими фашистами,- говорилось в обращении райкома от 9 июня 1942 г. к населению района и города.- Все, кто в состоянии держать оружие и действовать, от мала до велика, поднимайтесь на совместную всенародную борьбу против немецких оккупантов за нашу родную Советскую Белоруссию, за национальную независимость, за счастье наших детей. Бейте и беспощадно истребляйте фашистских гадов везде и всюду: в деревне и в городе, в лесу и поле, не давайте врагу покоя ни днем, ни ночью, расширяйте партизанскую борьбу, всемерно" поддерживайте действия партизанских отрядов". <br />
          Большую диверсионную работу в городе проводили партизаны бригады "Смерть фашизму". Комсомольцы-разведчики установили систематическую связь с Полоцком. Активной и смелой связной и разведчицей была учительница 3. Н. Стрельченко. Она часто пробиралась в город и возвращалась с цепными разведывательными данными. В ноябре 1942 г. Стрельченко доставила в город несколько магнитных мин, которые подпольщица Л. Ф. Терещенко использовала для подрыва железнодорожных эшелонов Так на участке железной дороги Полоцк - Горяны 4 ноября был пущен под откос эшелон с боеприпасами, 13 ноября- с живой силой, боеприпасами и продовольствием. <br />
          <br />
          С помощью партизан подпольные группы Полоцка вывели из строя водопроводную магистраль, обслуживавшую вражеский гарнизон, и систему водоснабжения ст. Полоцк, электростанцию, лесозавод, валяльную мастерскую, мельницу, сожгли немецкий продовольственный склад, гараж с автомашинами, уничтожили десятки гитлеровских солдат и совершили ряд других диверсии. <br />
          <br />
          Диверсионную деятельность в городе проводила бригада "Неуловимые". Партизанской группой этой бригады с помощью подпольщиков был подожжен склад с сеном, сожжено 15 автомашин и 10 т бензина. <br />
          <br />
          Штабы партизанских бригад придавали большое значение уничтожению нефтебазы в Полоцке. В связи с этим партизанам бригад "Смерть фашизму" и "Неуловимые" были даны задания организовать взрыв базы. Подготовкой взрыва занималась группа "Ася" по заданию 3-й Белорусской партизанской бригады. Партизаны и подпольщики совершили несколько взрывов на нефтебазе, во время одного из которых были уничтожены десятки тонн бензина, подготовленного для отправки на фронт. Организацией диверсий в Полоцке занимались также партизаны бригады "За Советскую Белоруссию". <br />
          Прилив в партизанские отряды полочан позволил укрепить через них связи с городом, усилить разведывательную и боевую деятельность отрядов. Благодаря этому партизанские отряды усиливали свою мощь и боевую деятельность. <br />
          Взаимодействие полоцкого подполья с партизанскими силами и партийными органами партизанской зоны способствовало более четкой организации борьбы на коммуникациях врага. Начиная с лета 1943 г. действия партизан на железнодорожных магистралях стали принимать все более широкие размеры, в результате чего резко сократилось движение поездов. Если в течение июля 1942 г. на участке Полоцк-Двинск прошло 900 поездов, то в июле 1943 г.-только 41, на участке Полоцк-Витебск движение сократилось с 900 до 77. Движение же на линиях Крулевщизна-Полоцк, Двинск-Полоцк и Полоцк-Невель было настолько парализовано партизанами, что поезда, например на линии Полоцк-Невель, пришлось направлять кружным путем через Витебск. Партизаны контролировали и шоссейные дороги. <br />
          В конце сентября 1943 г. войска левого крыла Калининского фронта начали наступление в направлении Витебска. В начале ноября были частично освобождены Городокский, Меховский, Полоцкий, Сиротинский и Россонский районы, в декабре-районные центры Езерище и Городок. Партизанские отряды Полоцко-Лепельской зоны активно участвовали и в осуществлении второго этапа "рельсовой войны", начавшегося 25 сентября. Только партизаны бригады "За Советскую Белоруссию" за ночь взорвали более 2,5 тыс. рельсов на железной дороге Полоцк- Молодечно. <br />
        </p>
        <hr className="history__hr" />
      </article>


      <article className="history__article">
        <h3 className="history__subTitle">Освобождение Полоцка</h3>
        <img src={img4} alt="" className="history__img" />
        <p className="history__text">
          Время неумолимо отдаляет события, но бережно хранит память - о подвиге солдат, освободивших 4 июля 1944 года город от немецко-фашистских захватчиков Полоцк. История нашего города богата героическими событиями. Особенно ценны сведения о последних боях за наш древний город, который спустя 85 лет гордо и уверенно смотрит вперед. <br />
          <br />
          Полоцкая наступательная операция проводилась войсками 1-го Прибалтийского фронта после успешного завершения Витебско-Оршанской наступательной операции. <br />
          <br />
          Целью Полоцкой операции был разгром группировки немецких войск и освобождение Полоцка. Предусматривалось ударом по сходящимся направлениям окружить и разгромить полоцкую группировку гитлеровцев. <br />
          <br />
          Советским войскам противостояли соединения 16-й армии группы армий «Север» (генерал-полковник Г. Линдеман) и часть сил немецкой 3-й танковой армии группы армий «Центр». В районе Полоцка находилось 6 немецких дивизий. Была создана оборонительная полоса «Тигр». Озёрно-болотистая местность вокруг Полоцка создавала труднопреодолимый оборонительный район. В городе был создан рубеж круговой обороны. <br />
          <br />
          Главные удары советской армии наносили войска правого фланга фронта (6-я гвардейская армия) в направлении на Полоцк и левого фланга (4-я Ударная армия) в направлении на Котляны — Полоцк. <br />
          <br />
          29 июня 1944 года соединения 4-й Ударной и 6-й гвардейской армий развернули наступление на Полоцк, охватывая фланги Полоцка. 30 июня была поставлена задача освободить Полоцк к концу 1 июля. К утру следующего дня соединения 6-й гвардейской армии вышли к окраинам Полоцка, а соединения 43-й армии и части 1-го танкового корпуса перерезали железную дорогу Полоцк—Молодечно и вышли на рубеж Германовичи—Докшицы. 1-й танковый корпус 29 июня освободил Ушачи, вырвался на оперативный простор и сокрушительными ударами с тыла способствовал успешному наступлению с фронта соединений 6-й гвардейской и 43-й общевойсковой армий. <br />
          Упорные бои за Полоцк продолжались 4 дня. К утру 4 июля город был очищен от противника. В результате Полоцкой операции войска 1-го Прибалтийского фронта овладели Полоцким узлом обороны, уничтожили 6 немецких дивизий, продвинулись за 6 суток на 120—130 км и вышли на рубеж Опса — Козьяны — озеро Нарочь. <br />
          <br />
          Приказом ВГК 31 соединений и военных частей, которые штурмовали город и отличились при его освобождении, были удостоены почётного наименования «Полоцких». За освобождение Полоцка более 30 советских воинов получили звание Героя Советского Союза. <br />
          <br />
          На улице Гагарина в Полоцке установлен обелиск в честь войск 1-го Прибалтийского фронта. На площади Свободы в Полоцке установлен памятник воинам-освободителям. Возле шоссейной дороги на Минск в Полоцке установлен на пьедестале танк «Т-34» в память экипажа Героя Советского Союза В. Д. Халева, который первым прорвался в город. <br />
          <br />
          В память о жертвах Великой Отечественной войны на левом берегу Западной Двины в 1966 году был возведён Мемориальный комплекс Курган Бессмертия, земля для которого была привезена с братских могил и полей сражений Белоруссии. <br />
          <br />
          В 1971 году в Полоцке был открыт Музей боевой славы. <br />
          <br />
          В память 23 воинов 8-й стрелковой роты 158-го гвардейского стрелкового полка 51-й гвардейской стрелковой дивизии под командованием гвардии лейтенанта А. М. Григорьева, которые форсировали Западную Двину и захватили плацдарм, на берегу реки, на месте боя, установлен обелиск с мраморной плитой. На ней высечены имена погибших. В память о 23-х гвардейцах в Полоцке названа также улица. <br />
          <br />
          О гвардейцах взвода А. М. Григорьева Юрий Визбор написал песню «Цена жизни». <br />
        </p>
      </article>
    </div>
  </section>

  )
}
