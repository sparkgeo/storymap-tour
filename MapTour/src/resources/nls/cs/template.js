﻿define(
({
		viewer: {
			loading: {
				step1: "NAHRÁVÁNÍ APLIKACE",
				step2: "NAHRÁVÁNÍ DAT",
				step3: "SPOUŠTĚNÍ PROHLÍDKY",
				loadBuilder: "PŘEPÍNÁNÍ DO REŽIMU TVORBY",
				fail: "Je nám líto, ale nepodařilo se načíst prohlídku mapy.",
				failButton: "Zkusit znovu"
			},
			errors: {
				boxTitle: "Nastala chyba.",
				portalSelf: "Závažná chyba: Nepodařilo se získat konfiguraci portálu.",
				invalidConfig: "Závažná chyba: Neplatná konfigurace",
				invalidConfigOwner: "Závažná chyba: Neplatná konfigurace (vyžadován autorizovaný vlastník)",
				invalidConfigNoWebmap: "Závažná chyba: Neplatná konfigurace (v index.html není specifikována webová mapa nebo identifikátor aplikace)",
				createMap: "Nelze vytvořit mapu",
				invalidApp: "Závažná chyba: Aplikaci nelze načíst",
				noLayer: "Webová mapa neobsahuje platnou datovou vrstvu k prohlídce mapy.",
				noLayerMobile: "Vítejte ve webové aplikaci prohlídky mapy. Aplikace není nakonfigurována. Nástroj pro tvorbu prohlídek map není podporován na mobilních zařízeních.",
				noLayerView: "Vítejte ve webové aplikaci prohlídky mapy.<br />Aplikace zatím není nakonfigurována.",
				appSave: "Chyba při ukládání webové aplikace",
				mapSave: "Chyba při ukládání webové mapy",
				featureServiceLoad: "Chyba při načítání služby Feature Service",
				notAuthorized: "Nemáte oprávnění k přístupu do této aplikace.",
				oldBrowserTitle: "Prohlížeč není plně podporován.",
				noBuilderIE8: "Nástroj pro tvorbu prohlídek map není podporován programem Internet Explorer verze nižší než 9.",
				ie10Win7Explain: "Interaktivní nástroj pro tvorbu prohlídek map není podporován prohlížečem Internet Explorer 10 ve Windows 7, pokud je zdrojem dat služba Feature Service s přílohami. Chcete-li použít službu Feature Service s přílohami, bude nutné <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>manuálně přepnout režim dokumentu na standardy Internet Explorer 9</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>downgradovat na Internet Explorer 9</a> nebo upgradovat na Windows 8.",
				oldBrowserExplain: "Váš prohlížeč nepodporuje automatickou tvorbu miniatur z obrázků nahraných do prohlídky mapy. Prohlídku mapy lze v prohlížeči vytvořit, bude však nutné ke každému nahranému obrázku dodat samostatnou miniaturu.",
				oldBrowserExplain2: "Pro plynulejší chod <a href='http://browsehappy.com/' target='_blank'>stáhněte jiný prohlížeč</a> nebo <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>nainstalujte Google Chrome Frame pro Internet Explorer</a>.",
				oldBrowserExplain3: "Nástroj pro tvorbu prohlídek map nefunguje v prohlížeči Internet Explorer 10 ve Windows XP.",
				oldBrowserClose: "Zavřít"
			},
			mobileHTML: {
				showIntro: "ZOBRAZIT NADPIS",
				hideIntro: "SKRÝT NADPIS",
				navList: "Seznam",
				navMap: "Mapa",
				navInfo: "Obrázky",
				introStartBtn: "Spustit"
			},
			desktopHTML: {
				storymapsText: "Mapa s příběhem",
				builderButton: "Přepnout do režimu tvorby",
				bitlyTooltip: "Získejte krátký odkaz k aplikaci"
			},
			builderHTML: {
				panelHeader: "KONFIGURACE APLIKACE",
				buttonSave: "ULOŽIT",
				buttonDiscard: "STORNO",
				buttonSettings: "Nastavení",
				buttonView: "Režim prohlížení",
				buttonItem: "Otevřít položku webové aplikace",
				buttonHelp: "Nápověda",
				buttonOrganize: "Organizovat",
				buttonAdd: "Přidat",
				buttonImport: "Import",
				buttonImportDisabled: "Import není dostupný, pokud je využívána služba Feature Service s přílohami.",
				dataEditionDisabled: "Úprava dat je u zdroje dat ve formátu CSV zakázána.",
				dataSourceWarning: "Vrstva prohlídky mapy se změnila. Nejsou-li ID prvků stejná, musíte resetovat pořadí a skryté body pomocí volby <b>Organizovat</b>. Pokud se liší názvy polí, musíte resetovat nastavení polí v <b>záložce dat v Nastavení</b>.",
				dataPicError0a: "Tato prohlídka obsahuje <b>%NB%</b> nevyhovujících URL obrázků.",
				dataPicError0b: "Tato prohlídka může obsahovat <b>%NB%</b> nevyhovujících URL obrázků.",
				dataPicError1: "Prohlídky map nyní vyžadují, aby URL obrázků měly jednu z těchto přípon: jp(e)g, png, gif nebo bmp.",
				dataPicError2: "Tento požadavek nebude mít vliv na existující publikované prohlídky mapy. Aby však bylo možné používat interaktivní nástroj pro tvorbu, je nutné nejprve vyřešit problém s URL provedením jedné z následujících akcí:",
				dataPicError3: "Upravit URL",
				dataPicError4: "Tato možnost přidá na konec nepodporovaných URL obrázků parametr <i>#isPicture</i>. Většina serverů dodatky k URL adresám podporuje. Po provedení této akce je vhodné si navigací mezi body ověřit, zda jsou aktualizované URL obrázků funkční. Pokud se všechny obrázky načtou, můžete prohlídku mapy uložit. Pokud jsou <b>některé obrázky nefunkční, neukládejte prohlídku mapy</b>. Namísto toho znovu načtěte nástroj pro tvorbu a proveďte druhou nabídnutou akci.",
				dataPicError5: "Omezit prohlídku na obrázky",
				dataPicError6: "Tato možnost způsobí, že budou všechny URL adresy považovány za obrázky. Pomocí interaktivního nástroje pro tvorbu však nebude možné přidávat videa. Pokud se v budoucnosti rozhodnete přidávat videa, lze tuto akci vrátit zpět.",
				dataPicError7: "Vaše prohlídka mapy byla omezena na obrázky, není možné používat videa. Pokud se rozhodnete toto omezení odebrat, před uložením prohlídky se ujistěte, že se všechny obrázky stále správně načítají. V případě potřeby budete moci toto omezení později znovu obnovit.",
				dataPicError8: "Odebrat omezení na obrázky",
				dataPicError9: "Pokud tyto URL adresy odkazují na videa, můžete toto upozornění ignorovat. Pokud odkazují na obrázky, je nutné provést jednu z následujících akcí:",
				modalCancel: "Storno",
				modalApply: "Použít",
				organizeHeader: "Organizovat prohlídku",
				organizeGeneralCaption: "Uspořádejte body prohlídky jejich přetáhnutím.",
				organizeDelete: "Smazat",
				organizeHide: "Skrýt",
				organizeReset: "Resetovat pořadí a skryté body.",
				addMaxPointReached: "Dosáhli jste maximálního počtu bodů autorizovaných sadou ikon a nemůžete již přidat další bod prohlídky.<br /><br />Vymažete-li již existující body, budete muset aplikaci otevřít znovu.",
				addMaxPointReachedMobile: "Omlouváme se, dosáhli jste maximálního počtu autorizovaných bodů a tento obrázek proto nemůžete přidat.",
				addClose: "Zavřít",
				addHeader: "Přidat nový bod prohlídky",
				addTabPicture: "Média",
				addTabInformation: "Informace",
				addTabLocation: "Umístění",
				addSelectCaption: "Vyberte nebo přetáhněte obrázek.",
				addNoteVideo: "Více informací o používání videí naleznete v nápovědě",		
				addSelectCaptionNoFileReader: "Vybrat obrázek",
				addChangePhoto: "Změnit obrázek a miniaturu",
				addPictureResolutionIntro: "Rozlišení obrázku je příliš vysoké.",
				addPictureResolutionOldBrowser: "Rozlišení obrázku je příliš vysoké. Optimalizujte chod prohlídky mapy použitím rozlišení, které je nižší než %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Změnit rozlišení obrázku na %RESOLUTION%",
				addPictureResolutionKeep: "Ponechat původní rozlišení %RESOLUTION%",
				addSelectThumbnail: "Vybrat miniaturu",
				addNoThumbSelected: "Není vybrána žádná miniatura",
				addThumbSelected: "Vybrána",
				addCameraSettingsHeader: "NASTAVENÍ FOTOAPARÁTU",
				addThumbnailHeader: "MINIATURA",
				addLabelPicUrl: "Obrázek",
				addLabelThumbUrl: "Miniatura",
				addTextPlaceholderUrl: "Zadejte URL obrázku.",
				addTextPlaceholderUrl2: "Zadejte URL stránky YouTube.",
				addTextPlaceholderUrl3: "Zadejte URL stránky Vimeo.",
				addTextPlaceholderUrl4: "Zadejte URL pro vložení videa.",
				addLabelVideo: "Video",
				addMediaVideoOther: "Jiné",
				addMediaVideoHelp: "Zkontrolovat URL a získat výchozí miniaturu",
				addMediaVideoHelpTooltip1: "Kontrola byla úspěšná.",
				addMediaVideoHelpTooltip2: "Kontrola se nezdařila.",
				addMediaVideoHelpTooltip4: "Najděte možnost vložení videa a zkopírujte URL videa, které se nachází v kódu",
				addLabelName: "Název",
				addLabelDescription: "Popisek",
				addTextPlaceholder: "Napište zde něco",
				addLocatePlaceholder: "Najít adresu nebo místo",
				addPinColor: "Barva",
				addLatitude: "Zeměpisná šířka",
				addLongitude: "Zeměpisná délka",
				addLatitudePlaceholder: "např. 34,056",
				addLongitudePlaceholder: "např. -117,195",
				addUploading: "Nahrávání bodu prohlídky",
				addSave: "Přidat bod prohlídky",
				addMobileUploading: "Nahrávání obrázku",
				addMobileName: "Zadejte jméno",
				addMobileNameMandatory: "Chyba, zadejte prosím název.",
				addMobileError: "Omlouváme se, někde se stala chyba.",
				settingsHeader: "Nastavení aplikace",
				settingsTabLayout: "Rozvržení",
				settingsTabColor: "Barvy",
				settingsTabLogo: "Záhlaví",
				settingsTabFields: "Data",
				settingsTabExtent: "Rozsah",
				settingsTabZoom: "Úroveň přiblížení",
				settingsLayoutExplain: "Vyberte požadované rozvržení aplikace.",
				settingsLayoutProfessional: "Rozvržení tří panelů",
				settingsLayoutModern: "Ucelené rozvržení",
				settingsLayoutSelected: "Vybrané rozvržení",
				settingsLayoutSelect: "Zvolit toto rozvržení",
				settingsLayoutNote: "Při používání videí na bodech bude pod videem vždy poutač, i když tato možnost není zaškrtnuta.",
				settingsColorExplain: "Změňte vzhled volbou přednastaveného motivu, nebo si vytvořte svůj vlastní.",
				settingsLabelColor: "Barvy záhlaví, obsahu a zápatí",
				settingsLogoExplain: "Přizpůsobte logo v záhlaví (maximum je 250 × 50 px).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Bez loga",
				settingsLogoCustom: "Vlastní logo",
				settingsLogoCustomPlaceholder: "URL obrázku",
				settingsLogoCustomTargetPlaceholder: "Odkaz při kliknutí na obrázek",
				settingsLogoSocialExplain: "Upravit odkaz v pravé horní části záhlaví.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Odkaz",
				settingsLogoSocialDisabled: "Tato funkce byla zakázána administrátorem.",
				settingsDataFieldsExplain: "Vyberte pole názvu, popisku a barvy.",
				settingsDataFieldsError: "Aplikace nedokáže určit vhodná data názvu, popisku nebo barvy. Zvolte prosím pole, která mají být použita. Toto nastavení lze kdykoliv změnit.",
				settingsFieldsLabelName: "Název",
				settingsFieldsLabelDescription: "Popisek",
				settingsFieldsLabelColor: "Barva",
				settingsFieldsReset: "Resetovat výběr polí.",
				settingsExtentExplain: "Prostřednictvím následující interaktivní mapy nastavte výchozí rozsah prohlídky mapy.",
				settingsExtentExplainBottom: "Vámi definovaný rozsah upraví počáteční rozsah vaší webové mapy. Pokud rozsah neobsahuje první bod prohlídky, nepoužije se. Prohlídka se v takovém případě otevře vycentrovaná na první bod.",
				settingsExtentDateLineError: "Rozsah nesmí přesahovat 180° zeměpisné délky.",
				settingsExtentDateLineError2: "Při výpočtu rozsahu došlo k chybě.",
				settingsExtentDrawBtn: "Určit nový rozsah",
				settingsExtentModifyBtn: "Upravit rozsah",
				settingsExtentApplyBtn: "Zobrazit náhled na prohlídce mapy",
				settingsExtentUseMainMap: "Použít rozsah prohlídky mapy",
				settingsZoomExplain: "Nastavit přiblížení bodů příběhu po úvodu (nepovinné).",
				settingsLabelZoom: "Měřítko/úroveň",
				settingsZoomFirstValue: "Žádné",
				settingsFieldError: "Vyberte pole v každém seznamu.",
				dataExplain: "Služba Feature Service bude přidána do webové mapy. Nebude s nikým sdílena. Pouze vy budete mít oprávnění přidávat, editovat a mazat.<br /><br />Pokud změníte oprávnění sdílení aplikace, systém se vás zeptá, zda chcete aktualizovat konfiguraci sdílení služby Feature Service. Je to nutné proto, aby uživatelé měli přístup k vašim datům. Jediným uživatelem s oprávněním k editaci zůstanete vy.",
				dataNameLbl: "Název služby",
				dataFolderListLbl: "Složka",
				dataFolderListFetching: "Načítání složek…",
				dataRootFolder: "Kořenový adresář",
				dataNameError: "Zadejte název služby Feature Service",
				dataFolderError: "Vyberte platnou složku",
				dataSrcContainsInvalidChar: "Jméno služby obsahuje jeden nebo několik neplatných znaků (-, <, >, #, %, :, \", ?, &, +, /, nebo \).",
				dataSrvAlreadyExistsError: "Služba s tímto jménem už v mapách organizace existuje. Zvolte prosím jiné jméno.",
				dataBtnSave: "Vytvořit službu",
				dataFooterProgress: "Služba se vytváří",
				dataFooterSucceed: "Vytvoření se podařilo. Načítání",
				dataFooterError: "Vytvoření se nezdařilo. Zkuste to prosím znovu.",
				tabError: "Zkontrolujte prosím, nejsou-li v záložkách chyby.",
				introRecordBtn: "Úvod",
				introRecordActivate: "Použít první bod jako úvod (nezobrazuje se v karuselu)"
			},
			addPopupJS: {
				uploadingPicture: "Nahrávání obrázku",
				uploadSuccess: "Nahrání proběhlo úspěšně.",
				uploadError: "Při nahrávání obrázku nastala chyba.",
				notJpg: "Vyberte prosím soubor jpeg, který chcete nahrát.",
				errorNoPhoto: "Vyberte obrázek, který chcete nahrát.",
				errorNoThumbnail: "Vyberte miniaturu, kterou chcete nahrát.",
				errorInvalidPicUrl: "Zadejte platnou URL obrázku pro tento bod prohlídky (začíná http(s):// a končí příponou jpg, png, gif nebo bmp). Chcete-li tento požadavek potlačit, vložte na konec URL parametr #isPicture.",
				errorInvalidThumbUrl: "Zadejte platnou URL pro tento bod prohlídky (začíná http(s):// a končí příponou jpg, png, gif nebo bmp).",
				errorInvalidVideoUrl: "Zadejte platnou adresu URL videa (začíná http(s)://).",
				errorNoName: "Zadejte jméno tohoto bodu prohlídky.",
				errorNoDescription: "Zadejte popisek tohoto bodu prohlídky.",
				errorNoLocation: "Nastavte umístění tohoto bodu prohlídky."
			},
			builderJS: {
				noPendingChange: "Žádná neuložená změna",
				unSavedChangeSingular: "1 neuložená změna",
				unSavedChangePlural: "neuložených změn",
				popoverDiscard: "Určitě chcete přijít o všechny neuložené změny?",
				yes: "Ano",
				no: "Ne",
				popoverLoseSave: "Otevřením tohoto prohlížeče přijdete o všechny neuložené změny.",
				ok: "OK",
				popoverSaveWhenDone: "Až budete hotovi, nezapomeňte provedené změny uložit.",
				closeWithPendingChange: "Určitě chcete potvrdit tuto akci? Vaše změny nebudou uloženy.",
				gotIt: "OK",
				savingApplication: "Ukládání aplikace",
				saveSuccess: "Aplikace byla úspěšně uložena.",
				saveError: "Uložení se nezdařilo, zkuste to prosím znovu.",
				dragColorPicker: "Přesuň<br />nebo změň  barvu.",
				dataWarningExtent: "Některá data se nachází mimo rozsah webové mapy. Tato data nebudou použita jako body prohlídky. Chcete-li je použít, změňte rozsah mapy.",
				dataWarningVisibi: "Vrstva prohlídky mapy není při současném rozsahu webové mapy viditelná. Ujistěte se, že je vrstva prohlídky mapy viditelná v mapě o velikosti %MAPSIZE%.",
				dataWarningEdit: "Upravit webovou mapu",
				dataWarningClose: "Zavřít",
				signIn: "Přihlaste se pomocí účtu na",
				signInTwo: "pro uložení aplikace."
			},
			organizePopupJS: {
				messageStart: "Přejete si odstranit",
				messageSinglePoint: "bod prohlídky",
				messageMultiPoint: "body prohlídky",
				messagePermantRemove: "Tato činnost nevratně odstraní",
				messageRecord: "záznam",
				messageRecordPlural: "záznamy",
				messageConfirm: "z vaší databáze. Přejete si pokračovat?",
				labelButtonShow: "Zobrazit",
				labelButtonHide: "Skrýt"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "Tato činnost nevratně odstraní obrázek a miniaturu.",
				popoverDeleteWarningThumb: "Tato činnost nevratně odstraní miniaturu.",
				popoverUploadingPhoto: "Nahrávání obrázku a miniatury",
				popoverUploadingThumbnail: "Nahrávání miniatury",
				popoverUploadSuccessful: "Nahrání proběhlo úspěšně.",
				popoverUploadError: "Nahrání se nezdařilo, zkuste to prosím znovu.",
				changePicAndThumb: "Změnit obrázek",
				changeThumb: "Změnit miniaturu",
				selectPic: "Změnit média",
				selectThumb: "Změnit miniaturu",
				uploadPicAndThumb: "Použít"
			},
			headerJS:{
				editMe: "Uprav mě!",
				templateTitle: "Nastavit název šablony",
				templateSubtitle: "Nastavit podnadpis šablony"
			},
			crossFaderJS:{
				setPicture: "Nastavit název obrázku",
				setCaption: "Nastavit popisek obrázku"
			},
			importPopup: {
				title: "Import",
				prevBtn: "Zpět",
				nextBtn: "Další"
			},
			importPopupHome: {
				header: "Kde máte obrázky uloženy?"
			},
			onlinePhotoSharingCommon: {
				disabled: "Tato funkce byla zakázána administrátorem.",
				disabledPortal: "Tato funkce byla ve službě Portal for ArcGIS zakázána.",
				header1: "Obrázky musí být sdílené veřejně.",
				header2: "Import bude omezen na %NB1% obrázků, aby byl dodržen limit %NB2% bodů na prohlídku.",
				emptyDataset: "Chyba: nebyly nalezeny žádné obrázky",
				footerImport: "Import",
				selectAlbum: "Vybrat veřejné album",
				selectAlbum2: "Vybrat album",
				pleaseChoose: "Prosím vyberte.",
				userLookup: "Vyhledat",
				userLookingup: "Vyhledávání",
				csv: "Odkazováno ze souboru CSV",
				fromScratch: "Začít od začátku",
				select: "Provést výběr",
				locUse: "Používat umístění obrázků",
				locExplain: "Používat umístění obrázků nemusí být vždy vhodné, protože mohou být převzaty z alba. Všechny obrázky by tak byly ve stejném umístění."
			},
			viewFlickr: {
				header: "Zadejte uživatelské jméno ve službě Flickr a vyberte sadu fotografií nebo značku k importu.",
				userInputLbl: "Zadat uživatelské jméno",
				signInMsg2: "Uživatel nenalezen",
				selectSet: "Vybrat sadu fotografií",
				selectTag: "nebo Vybrat značku",
				footerImportTag: "Importovat vybranou značku",
				footerImportSet: "Importovat vybranou sadu"
			},
			viewFacebook: {
				header: "Proveďte ověření prostřednictvím uživatelského účtu ve službě Facebook nebo použijte veřejnou stránku. Soukromá alba lze využívat k vytváření veřejných prohlídek map, které nevyžadují ověření uživatele ve službě Facebook. Díky tomu zůstávají komentáře a označení tlačítkem To se mi líbí neveřejné.",
				leftHeader: "Uživatel služby Facebook",
				rightHeader: "Stránka služby Facebook",
				pageExplain: "Stránka služby Facebook představuje veřejnou značku či službu nebo známou osobnost, jako je například <b>esrigis</b>. Název stránky začíná za prvním lomítkem (/) v URL adrese stránky.",
				pageInputLbl: "Zadat název stránky",
				lookupMsgError: "Stránka nenalezena"
			},
			viewPicasa: {
				header: "Zadejte e-mail nebo identifikátor pro službu Picasa nebo účet Google+.",
				userInputLbl: "Zadat e-mail nebo identifikátor",
				signInMsg2: "Účet nenalezen",
				howToFind: "Jak najít identifikátor účtu",
				howToFind2: "Zkopírujte číslice mezi prvním a druhým lomítkem (/) libovolné stránky služeb Picasa nebo Google+."
			},
			viewCSV: {
				uploadBtn: "Vybrat nebo přetáhnout soubor CSV",
				resultHeaderEmpty: "Soubor CSV je prázdný",
				resultHeaderSuccess: "Počet úspěšně načtených bodů: %NB_POINTS%",
				resultHasBeenLimited: "Import byl omezen na prvních %VAL1% bodů z %VAL2%, aby byl dodržen limit %VAL3% bodů na prohlídku.",
				browserSupport: "Váš prohlížeč není podporován. Chcete-li používat formát CSV, bude nutné <a href='http://browsehappy.com/' target='_blank'>upgradovat prohlížeč</a> nebo použít webový prohlížeč map ArcGIS.com (viz nápověda).",
				errorLatLng: "Pole pro zeměpisnou šířku a délku nebyly nalezeny. Možné hodnoty pro zeměpisnou šířku jsou <i>%LAT%</i> a pro délku <i>%LONG%</i>.",
				errorFieldsExplain: "Načtení se nezdařilo, protože nebyla nalezena následující pole:",
				errorFieldsName: "<b>Název</b>, možné hodnoty: %VAL%",
				errorFieldsDesc: "<b>Popis</b>, možné hodnoty: %VAL%",
				errorFieldsUrl: "<b>URL obrázku</b>, možné hodnoty: %VAL%",
				errorFieldsThumb: "<b>URL miniatury</b>, možné hodnoty: %VAL%",
				errorFields2Explain: "Načtení se nezdařilo, protože soubor CSV nepoužívá stejné atributy, jako vrstva pro následující atributy.",
				errorFields2Name: "<b>Název</b> – použijte hodnotu %VAL1% místo hodnoty %VAL2%",
				errorFields2Desc: "<b>Popis</b> – použijte hodnotu %VAL1% místo hodnoty %VAL2%",
				errorFields2Url: "<b>URL obrázku</b> – použijte hodnotu %VAL1% místo hodnoty %VAL2%",
				errorFields2Thumb: "<b>URL miniatury</b> – použijte hodnotu %VAL1% místo hodnoty %VAL2%",
				resultFieldsAll: "Všechny atributy byly importovány.",
				resultFieldsNotAll: "Následující atributy nebyly importovány, protože v mapové vrstvě neexistují.",
				resultFieldsNotAll2: "Byly importovány následující atributy:",
				footerNextBtnResult: "Import do webové mapy",
				footerProgress: "Probíhá import",
				footerSucceed: "Import byl úspěšný. Načítání"
			},
			viewGeoTag: {
				header: "Kliknutím nebo klepnutím umístíte obrázky, které chcete importovat.",
				headerMore: "Proč se mé obrázky neumisťují?",
				headerExplain: "Pokud mají vaše obrázky platné umístění, budou na mapě automaticky umístěny a uvedeny na druhé kartě.<br /><br />Služby Picasa a Flickr ve výchozím nastavení nevyužívají metadata umístění EXIF. Zkontrolujte nastavení služby Flickr či Picasa na kartě Soukromí, kde lze povolit umisťování obrázků. Možná bude muset provést úplný reimport do služby Flickr či Picasa.<br /><br />U služby Facebook je nutné přejít na každý obrázek, kliknout na tlačítko Editovat a vybrat umístění z navržených možností, které vycházejí z metadat EXIF obrázků.",
				leftPanelTab1: "Umístit",
				leftPanelTab2: "Umístěno",
				clickOrTap: "Kliknutím nebo klepnutím na mapu provedete umístění.",
				clickDrop: "Neimportovat",
				footerImport: "Import",
				footerProgress: "Probíhá import",
				footerSucceed: "Import byl úspěšný. Načítání…",
				loading: "Načítání",
				error: "Nezdařil se import umístění obrázků, umístění byla ignorována."
			},
			initPopup: {
				title: "Vítá vás Nástroj pro tvorbu prohlídek map.",
				prevBtn: "Zpět",
				nextBtn: "Další"
			},
			initPopupHome: {
				header2: "Tento asistent vám pomůže vytvořit prohlídku mapy z obrázků, které jsou již uloženy online, případně je importuje do vašeho účtu ArcGIS Online pro organizace.",
				title1: "Moje obrázky jsou již hostovány.",
				title2: "Potřebuji hosting pro své obrázky.",
				hostedFsNA: "Dostupné pouze pro uživatele služby ArcGIS pro organizace v roli vydavatele nebo administrátora.",
				footer1: "Až budete hotovi, nezapomeňte prohlídku mapy sdílet se svým publikem na stránce položek aplikace.",
				footer2: "Nápověda k prohlídkám mapy",
				footer3: "Stáhnout šablony CSV",
				footer4: "Pokud se nestáhne, zvolte možnost \"Uložit jako\".",
				footerProgress: "Probíhá vytváření",
				footerSucceed: "Úspěšně vytvořeno. Načítání..."
			},
			helpPopup: {
				title: "Nápověda",
				close: "Zavřít",
				tab1: {
					title: "Úvod",
					div1: "Šablona prohlídky mapy je navržena k prezentaci geografických informací, pokud je pro příběh, který chcete vyprávět, k dispozici atraktivní fotografický prvek.",
					div2: "Pomocí šablony lze vytvořit atraktivní a snadno ovladatelnou webovou aplikaci umožňující umístit na mapu krátkou sadu míst v číslované sekvenci, kterou mohou uživatelé procházet. Šablona je navržena k použití v libovolném webovém prohlížeči na všech zařízeních včetně chytrých telefonů a tabletů.",
					div3: "Tato nápověda vás provede postupem publikování prohlídek map, jako jsou například tyto:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>prohlídka mapy Palm Springs</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>Nejlepší cyklovýlety po Nizozemsku</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>prohlídka mapy Los Angeles po řece</a></li></ul>",
					div5: "Uvítáme i vaši tvorbu. Své prohlídky map s námi můžete sdílet:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>webová stránka StoryMaps</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Našli jste chybu nebo si přejete novou funkci? Kontaktujte nás zadáním problému na <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>projektové stránce GitHub</a>."
				},
				tab2: {
					title: "Data",
					div1: "Hlavním aspektem, který je třeba při vytváření prohlídky mapy zvážit, je výběr úložiště obrázků. Prohlídky map mohou využívat obrázky uložené prostřednictvím hlavních služeb pro sdílení fotografií, na libovolném webovém serveru nebo jako přílohy služeb feature service.",
					div1a: "Podrobné informace o podporovaných formátech obrázků a videa naleznete v poslední části této karty.",
					div2: "Interaktivní nástroj pro tvorbu vám dává dvě možnosti, jak v prohlídce mapy zpracovávat obrázky:",
					div3: "<ul><li>Můžete použít <b>fotografie, které již jsou online</b>, například obrázky uložené ve službě pro sdílení fotografií jako Flickr nebo obrázky uložené na vašem vlastním webu. Na URL těchto obrázků budou mířit odkazy z prohlídky mapy.</li><li>Můžete také <b>nahrávat fotografie z počítače</b> přímo do prohlídky mapy. Tato možnost pro nahrávání vyžaduje předplatné ArcGIS Online a oprávnění vydavatele nebo administrátora, protože automaticky vytvoří hostovanou službu feature service, ve které se fotografie uloží jako přílohy.</li></ul>",
					div4: "Využití se najde hlavně v těchto případech:",
					div4b: "<b>Fotografie ještě nemáte hostované</b> a máte předplatné ArcGIS Online: Využití hostované služby feature service je pro vás nejlepší možnost. Stejně jako veřejné služby pro sdílení fotografií vaše obrázky optimalizujeme, aby se rychle načítaly. Budete mít přístup ke všem možnostem administrace a správy dat platformy ArcGIS.",
					div5: "<b>Nejste členem organizace</b>: Nejprve bude nutné nahrát obrázky na web pro sdílení fotografií nebo na vlastní webový server. Nástroj pro tvorbu vám pak pomůže použít tyto obrázky, které budou dál uloženy v původním umístění.",
					div6: "<b>Chcete znovu využít stávající službu Feature Service</b>, ve které jsou obrázky uloženy jako přílohy nebo která odkazuje na externě uložené obrázky. Podrobný návod najdete v příslušné části níže.",
					div7: "<b>Využíváte předchozí verzi</b> šablony prohlídky mapy a již máte soubor CSV, který odkazuje na příslušné obrázky a miniatury. Budete moci importovat a doplnit data. Nástroj pro tvorbu podporuje pouze soubory CSV, které využívají pole zeměpisné šířky a délky. Soubory CSV využívající adresy mohou je nadále možno používat prostřednictvím webové mapy (viz příslušná část níže).",
					div8: "Import ze služeb pro online sdílení fotografií",
					div9: "Operace importu odkazuje na hostované obrázky uložením jejich adresy URL ve sbírce prvků webové mapy. Obrázky nejsou uloženy ve službě ArcGIS Online. Pokud hostované obrázky nejsou přístupné, nebudou se v prohlídce mapy zobrazovat. Místo nich se zobrazí zpráva „Obrázek není k dispozici“. V závislosti na poskytovateli služeb obrázků nemusí prohlídka mapy importovat název, popis a umístění obrázků. Tyto atributy jsou uloženy ve webové mapě a případné úpravy online služeb se v prohlídce mapy nijak neprojeví.",
					div10: "Obrázky uložené na webovém serveru",
					div11: "Rozhodnete-li se hostovat si obrázky sami, bude nutné manuálně vytvořit jejich miniatury. Použijete-li jako miniatury obrázky v plném rozlišení, výrazně tím snížíte výkon. Z tohoto důvodu důrazně doporučujeme využívat služby pro online sdílení fotografií nebo službu feature service, které to provedou za vás.",
					div12: "Využití stávající služby Feature Service nebo souboru Shapefile",
					div13: "Jako zdroj dat pro prohlídku mapy lze využít libovolnou službu feature service nebo soubor Shapefile využívající body. Bude jen třeba je přidat do webové mapy jako vrstvu prostřednictvím prohlížeče map na stránkách arcgis.com. Pokud aplikace ve vrstvě najde očekávané atributy, budou k dispozici všechny funkce nástroje pro vytváření.",
					div14: "Očekávaná jsou tato pole (na velikosti písmen nezáleží):",
					div151: "Název",
					div152: "Popis",
					div153: "Obrázek",
					div154: "Miniatura",
					div155: "Barva (volitelné)",
					div16: "Pole Název a Popis jsou povinná. Pokud aplikace při použití služby feature service nenajde odpovídající pole, nebude nástroj pro zobrazení fungovat, dokud tato pole nenakonfigurujete pro použití nástrojem pro tvorbu. Vrstvy CSV a shapefile přidané do webové mapy musí obsahovat všechna požadovaná pole, jinak nebude nástroj pro tvorbu fungovat.",
					div162: "Při používání služby feature service, která obrázky ukládá jako přílohy, <b>budou použity pouze prvky se dvěma přílohami</b>. První příloha určuje hlavní obrázek, druhá příloha určuje miniaturu.",
					div17: "Pole obrázku a miniatury jsou povinná pro službu feature service bez příloh. Pro službu feature service s přílohami jsou volitelné (ale důrazně je doporučujeme). Pokud máte ve službě povolené přílohy, nástroj pro tvorbu vám umožní nahrávat obrázky jako přílohy. V opačném případě budete moci pouze editovat adresu URL obrázku a miniatury.",
					div172: "Pokud jsou pole obrázku a miniatury přítomna, budou vždy použita a přílohy služby feature service nebudou dotazovány.",
					div173: "Vzorové soubory CSV a shapefile můžete stáhnout z",
					div18: "Vytváření hostovaných služeb Feature Service ze souboru CSV nebo shapefile",
					div19: "Při vytváření hostovaných služeb feature service ze souboru CSV nebo shapefile nejsou přílohy ve výchozím nastavení povoleny. Chcete-li je povolit, otevřete stránku podrobností služby feature service, klikněte na malou šipku v sekci vrstev. Daná možnost se zobrazí. Prohlídka map bude nadále používat obrázky a miniatury, na které odkazujete prostřednictvím atributů. Pokud chcete obrázky nahrát jako přílohy služby feature service, budete to moci volitelně provést dvěma tlačítky na panelu obrázku (Změnit obrázek a Změnit miniaturu).",
					div20: "Podporované formáty obrázků a videí",
					div21: "Podporované formáty obrázků: <b>jpg, jpeg, png, gif a bmp</b>. Pokud multimediální soubor nekončí touto příponou, bude jej prohlídka mapy považovat za video (mimo případy, kdy je používána služba feature service, viz níže).",
					div22: "Šablona prohlídky mapy neobsahuje přehrávač videí, je nutné použít externí přehrávač videí poskytovaný některou službou pro hosting videí (najděte možnost vložení videa a zkopírujte adresu URL obsaženou v daném kódu). Chcete-li videa hostovat sami, můžete vytvořit html stránku, která obsahuje přehrávač videí jako např. <a href='http://www.videojs.com/'>Video.js</a>.",
					div23: "Interaktivní nástroj pro tvorbu neobsahuje dialogové rozhraní pro přidání videa při používání služeb feature service s přílohami, ale je možné tak učinit úpravou vašich dat mimo nástroj pro tvorbu. Pokud ve webovém prohlížeči na stránkách arcgis.com upravíte pole obrázků tak, aby odkazovala na externí video, a přidáte na konec adresy URL speciální parametr (#isVideo), budou vaše média považována za video.",
					div24: "Mějte na paměti, že je stále nutné mít dvě platné přílohy s obrázky, jinak bod nebude použit. U příloh služby feature service bez polí pro obrázek a miniaturu nelze používat videa."
				},
				tab3: {
					title: "Přizpůsobení",
					div1: "Nástroj pro tvorbu nabízí několik možností přizpůsobení, které jsou dostupné po kliknutí na tlačítko NASTAVENÍ v horním panelu. Pokud nenajdete možnost, kterou očekáváte, nabízíme také verzi ke stažení, kterou můžete implementovat na svůj webový server a upravit podle svých potřeb.",
					div2: "Hostovanou verzi doporučujeme s výjimkou následujících případů:",
					div3: "<li>Nenabízí požadované přizpůsobení uživatelského rozhraní, jako je například obrázek pozadí záhlaví.</li><li>Jste vývojář a chcete si aplikaci upravit.</li>",
					div4: "Verzi ke stažení lze nakonfigurovat prostřednictvím webové mapy nebo identifikátoru aplikace webového mapování. Hlavní způsoby použití jsou:",
					div41: "Svou prohlídku mapy tvoříte pomocí interaktivního nástroje pro tvorbu v hostovaném prostředí a šablonu konfigurujete pomocí identifikátoru aplikace webového mapování. Budou použita nastavení určena interaktivním nástrojem pro tvorbu.",
					div42: "Svou prohlídku mapy tvoříte mimo interaktivní nástroj pro tvorbu a šablonu konfigurujete pomocí identifikátoru webových map. V dokumentaci se dozvíte, jak šablonu konfigurovat.",
					div43: "Mějte na paměti, že interaktivní nástroj pro tvorbu je dostupný ve stažitelné verzi. Obsahuje však některá technická omezení ohledně prohlížečů, jako je například Internet Explorer ve verzi starší než 10.",
					div5: "Další informace o verzi ke stažení najdete na <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>projektové stránce GitHub</a>."
				},
				tab4: {
					title: "Tipy",
					div0: "Podporované prohlížeče",
					div0a: "Zobrazování prohlídek map je podporováno v IE8+. Interaktivní nástroj pro tvorbu je podporován v IE9+. Produkty aktivně testujeme ve všech hlavních prohlížečích, nicméně v případě potíží doporučujeme používat Chrome.",
					div0b: "Narazíte-li na jakékoli potíže, dejte nám vědět. Prozatím bude při vytváření prohlídky mapy pomocí CSV šablony minimalizována vaše interakce s rozhraním nástroje pro tvorbu.",
					div1: "Obrázky",
					div2: "Doporučujeme nahrávat obrázky na šířku. Obrázky na výšku lze použít také, ale na menších obrazovkách, jaké má třeba iPad, může velkou část fotografie zakrýt popisek (při zobrazení v užším prostoru zabere text více místa). Přestože v prohlídce mapy lze použít obrázky různých velikostí, tvarů a orientace, doporučujeme všechny obrázky nahrávat ve stejné velikosti a tvaru. Uživatele tak při prohlídce nebudou rozptylovat změny velikosti obrázků.",
					div2a: "Chcete-li obrázky hostovat sami, doporučujeme používat maximální velikost <b>1090×725</b> pro hlavní obrázky a <b>140×93</b> pro miniatury.",
					div3: "Formátování textu popisku značkami HTML",
					div4: "Text popisku může obsahovat značky HTML, kterými lze určit formátování a odkazy. Tento kód například přidá žlutý odkaz:",
					div5: "Podpůrné vrstvy",
					div6: "Do mapy můžete přidávat dodatečné podpůrné vrstvy, které slouží k přidání kontextu pro prohlídku mapy. Tyto vrstvy mohou obsahovat další geografické prvky, které chcete zobrazovat v mapě navíc k bodům prohlídky mapy, jako jsou naučné oblasti, pěší či automobilovou trasu po bodech prohlídky atd. Šablona zobrazuje tyto dodatečné podpůrné vrstvy s využitím symbolů, které určíte ve webové mapě. Vyskakovací okna však nejsou dostupná.",
					div7: "Prohlídka by měla být krátká a poutavá",
					div8: "Prohlídka může obsahovat nejvýše 99 bodů. Většina prohlídek bude ale samozřejmě výrazně kratší. Předpokládejte, že publikum nemá zájem procházet příliš mnoho bodů. Vám možná téma připadá fascinující, ale to nemusí automaticky platit pro všechny.",
					div9: "Další informace najdete v <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>podrobném průvodci</a>.",
					div10: "Režim vkládání",
					div11: "Chcete-li vložit šablonu do jiné webové stránky pomocí iframe, přidáním volitelného parametru \"&embed\" na konec adresy URL odstraníte záhlaví. Ve verzi ke stažení lze tento režim nastavit také konfiguračním souborem." 
				},
				tab5: {
					title: "Publikování",
					div1: "Až budete hotovi, nezapomeňte prohlídku mapy sdílet se svým publikem na stránce podrobností aplikace ve službě ArcGIS Online. Během tohoto procesu vás služba ArcGIS Online v případě potřeby požádá o aktualizaci závislých zdrojů (webová mapa, služba feature service), které nejsou sdíleny stejným způsobem. Je-li prohlídka mapy veřejná a nejsou-li některé zdroje sdíleny s publikem, budou uživatelé přesměrováni na přihlašovací stránku služby ArcGIS Online.",
					div2: "Pokud používáte hostovanou službu feature service vytvořenou nástrojem pro tvorbu prohlídek map, bude za vás aplikace spravovat zabezpečení služby. Zůstanete jediným uživatelem s oprávněním k editaci, i kdy budete službu sdílet veřejně.",
					div3: "Chcete-li sdílet prohlídku mapy veřejně, zkontrolujte, zda funguje i bez přihlášení k účtu ArcGIS.com.",
					div4: "Je užitečné vyzkoušet, jak vypadá prohlídka mapy na zařízení iPad při orientaci na šířku. Můžete tak zkontrolovat, zda popisky nepřekrývají příliš velkou část obrázků."
				}
			}
        }
    })
);