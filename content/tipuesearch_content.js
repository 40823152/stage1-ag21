var tipuesearch = {"pages": [{'title': 'about', 'text': '2021-協同產品設計實習-stage1-ag21 \n 專題題目:籃球機 \n 組員倉儲: 40823152 \xa0網站: 40823152 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 40823153 \xa0 \xa0 \xa0 \xa0 40823153 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 40823154 \xa0 \xa0 \xa0 \xa0\xa0 40823154 \xa0 \n \n \xa0\xa0 \n', 'tags': '', 'url': 'about.html'}, {'title': '工作分配', 'text': '=======\n', 'tags': '', 'url': '工作分配.html'}, {'title': '產品介紹', 'text': '動機:因為市面上的籃球機只能手動，所以我們改善了勞力部分，成為自動化的投籃機。 \n \n \n 籃球機 4 \n coppeliaSim模擬:版本4 \n \n \n', 'tags': '', 'url': '產品介紹.html'}, {'title': '產品開發紀錄', 'text': '以下是軟體 https://app.diagrams.net/ \xa0製作完成 \n \n 目前工作流程: \n \n \n \n \n<<<<<<< HEAD\n', 'tags': '', 'url': '產品開發紀錄.html'}, {'title': '40823152', 'text': '主題構思 \n 機構設計 \n 1.轉軸問題 \n coppeliaSim模擬與解決 \n \n 2.擊球問題 \n coppeliaSim模擬與解決 \n \n 3.coppeliaSim 比例問題 \n coppeliaSim模擬與解決 \n', 'tags': '', 'url': '40823152.html'}, {'title': 'test-1', 'text': '', 'tags': '', 'url': 'test-1.html'}, {'title': '40823153', 'text': '=======\n', 'tags': '', 'url': '40823153.html'}, {'title': 'test-2', 'text': '', 'tags': '', 'url': 'test-2.html'}, {'title': 'test1', 'text': '', 'tags': '', 'url': 'test1.html'}, {'title': '40823154', 'text': '\n', 'tags': '', 'url': '40823154.html'}, {'title': '產品問題', 'text': '=======\n', 'tags': '', 'url': '產品問題.html'}, {'title': '轉軸問題', 'text': 'coppeliaSim檔案 \n 擊球桿無法正常轉動 \n \n \n coppeliaSim檔案 \n 擊球桿正常轉動 \n \n \n 解決方法: \n 繪圖人員修改尺寸即可正常轉動 \n', 'tags': '', 'url': '轉軸問題.html'}, {'title': '擊球問題', 'text': '擊球問題: \n coppeliaSim模擬: 版本0 \n 最初的版本使用coppeliaSim模擬球無法飛遠或高。 \n \n \n 問題修改-1 \n coppeliaSim模擬:版本1 \n 繪圖人員修改了擊球棒尺寸，使用coppeliaSim模擬球可以飛高。 \n \n \n \n 問題解決: \n coppeliaSim模擬:版本2 \n 繪圖人員調整及球棒前端的角度，使用coppeliaSim模擬球可以飛遠且有一定的高度。 \n \n \n 版本2 擊球點圖片 \n 一開始擊球點位置 \n \n 球沿著斜面跑到頂點擊出，球即可飛高且遠。 \n \n', 'tags': '', 'url': '擊球問題.html'}, {'title': 'coppeliaSim 比例問題', 'text': '問題: \n coppeliaSim模擬:版本3 \n 經過版本2的計算後的距離，繪圖人員新增籃框與調整距離，但是使用coppeliaSim模擬球擊不遠。\xa0 \n \n \n 問題討論: \n 以下是2個版本的stl檔，打開檔案會發現2個檔案大廈會差不多，但是放到 coppeliaSim裡，版本2比例會自動放大。 \n 第二版本stl檔 \n 第三版本stl檔 \n \n \n 以下是版本2與版本3使用參數一樣模擬的影片 \n \n \n 解決版本: \n coppeliaSim模擬:版本4 \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以版本4放大10後就能擊中籃框。 \n \n \n 結論: \n 沒想到 coppeliaSim的比例不一樣，模擬會差很多，我猜想是因為軸和擊球桿放大10倍，導致紐力矩也放大10倍，因為力量不一樣，所以距離有差。 \n', 'tags': '', 'url': 'coppeliaSim 比例問題.html'}, {'title': 'inventor 模擬測試教學', 'text': '除了使用CoppeliaSimEdu做動態模擬外，還可以使用inventor去做動態模擬 \n \n 任何模擬都要到環境去做操作 \n \n 再來我們要做的是拋物線模擬，所以要使用動力學模擬去做操作 \n \n 一般來說初始畫面就只會有這些東西 \n \n 首先我們要先給物件重力 \n \n 通常我們重力都會給向下的力，如果黃色的箭頭是向上的話，將箭頭方向改為向下即可 \n \n 但是設完重力之後，球就會往下掉，並穿透主機構，所以就要讓球與主機構有編輯上的關係，讓球不會穿透主機構 \n \n 於是我們許要做的事是先插入接頭讓球與主機構有關係 \n \n 而這邊要使用3D接觸以防球掉下去，再來就先選擇球也就是元件1 \n \n 選好元件1之後我們選擇元件2，元件2的任意一個面即可 \n \n 球就不會穿過基座，而是停留在上面 \n \n 接著再以同樣的步驟，讓球與發球器有接觸 \n \n 設定完的接觸可從力接頭確認 \n \n 現在我們要讓發球器轉動就要給它設置力量，才能讓它轉動，並去撞擊球 \n \n 首先我們要讓發球器有力量轉動，就要到性質這邊去做調整 \n \n 到了性質這邊可以自由調整初始角度 \n \n 接下來要啟用接合扭矩並去調整所需要的數值即可 \n \n 這可以選擇輸入常數值或著是輸入圖表產生器 \n \n 這裡可自由設定線型函數數值 \n \n 左邊可輸入撥放時間右邊可輸入撥放速度數字越大越慢，反之則快 \n \n 最後打開模擬撥放器點擊撥放即可 \n \n', 'tags': '', 'url': 'inventor 模擬測試教學.html'}, {'title': '產品版本', 'text': '籃球機歷代版本 \n 籃球機 初代 \n 籃球機 初代 \n coppeliaSim模擬:版本2 \n 籃球機 2 \n \n \n', 'tags': '', 'url': '產品版本.html'}, {'title': '版本一', 'text': '籃球機 初代 \n coppeliaSim模擬: 版本0 \n 最初的版本使用coppeliaSim模擬球無法飛遠或高。 \n \n \n \n \n', 'tags': '', 'url': '版本一.html'}, {'title': '版本二工程圖', 'text': '工程圖 \n \n \n \n', 'tags': '', 'url': '版本二工程圖.html'}, {'title': '版本二', 'text': '籃球機 2 \n coppeliaSim模擬:版本2 _ \n \n 繪圖人員調整及球棒前端的角度，使用coppeliaSim模擬球可以飛遠且有一定的高度。 _ \n \n \n \n \n \n 版本2 擊球點圖片 \n 一開始擊球點位置 \n \n 球沿著斜面跑到頂點擊出，球即可飛高且遠。 \n', 'tags': '', 'url': '版本二.html'}, {'title': '版本一工程圖', 'text': '\n \n \n \n \n', 'tags': '', 'url': '版本一工程圖.html'}, {'title': '版本三', 'text': '籃球機 3 \n coppeliaSim模擬:版本3 \n 經過版本2的計算後的距離，繪圖人員新增籃框與調整距離，但是使用coppeliaSim模擬球擊不遠。\xa0 \n \n \n \n \n', 'tags': '', 'url': '版本三.html'}, {'title': '版本四', 'text': '籃球機 4 \n coppeliaSim模擬:版本4 \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以在 coppeliaSim裡 版本4放大10後就能擊中籃框。 \n \n \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以版本4放大10後就能擊中籃框。 \n 可調性 \n \n \n \n \n \n \n', 'tags': '', 'url': '版本四.html'}, {'title': '版本三工程圖', 'text': '工程圖 \n \n \n \n', 'tags': '', 'url': '版本三工程圖.html'}, {'title': 'pdf', 'text': 'pdf \n=======\n', 'tags': '', 'url': 'pdf.html'}]};