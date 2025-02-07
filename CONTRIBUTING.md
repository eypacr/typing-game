# Katkıda Bulunma Rehberi

Bu rehber, **"Typing Game"** projesine katkı sağlamak isteyen geliştiriciler için adım adım açıklamalar içermektedir. Katkı sağlamak için aşağıdaki adımları izleyin.

## 1. Depoyu Çatalla (Fork) :fork_and_knife:
- GitHub'da [Typing Game projesine](https://github.com/eypacr/typing-game) gidin.
- Sağ üst köşede bulunan **Fork** butonuna tıklayın. Bu işlem, projeyi kendi GitHub hesabınıza kopyalar ve orada değişiklikler yapmanızı sağlar.
- **Fork** butonuna tıkladığınızda, projenin kopyasını almak için kendi GitHub hesabınıza yönlendirileceksiniz.

### Fork işlemi neden önemlidir? :memo:
Fork işlemi, orijinal projeye zarar vermeden, yalnızca kendi kopyanız üzerinde çalışabilmenizi sağlar. Orijinal proje (upstream repository) üzerinde değişiklikler yapmak için pull request gönderebilirsiniz.

## 2. Depoyu Klonla (Clone) :package:
- GitHub'daki fork'unuzun sayfasına gidin.
- Sağ üst köşedeki **Code** butonuna tıklayın ve URL'yi kopyalayın.
- Terminal veya komut istemcisine gidin ve şu komutu çalıştırarak projeyi yerel bilgisayarınıza klonlayın:

    ```bash
    git clone https://github.com/kullanici-adi/typing-game.git
    ```

    Bu işlem, projenin bir kopyasını bilgisayarınıza indirir.

    **Not:** Yerel bilgisayarınıza projeyi klonladıktan sonra, istediğiniz değişiklikleri rahatça yapabilirsiniz. Ancak yapılan değişiklikler sadece yerel bilgisayarınızda olacaktır. Bu değişiklikleri GitHub'daki fork'unuza gönderebilmek için bir dal (branch) oluşturmanız gerekecek.

## 3. Yeni Bir Dal (Branch) Oluştur :twisted_rightwards_arrows:
- Katkılarınızı yapmadan önce, ana dal (genellikle `main` veya `master`) ile karışmaması için yeni bir dal (branch) oluşturun. Bu dal, üzerinde çalışacağınız özelliği veya düzeltmeyi temsil edecektir.
- Yeni bir dal oluşturmak için şu komutu kullanın:

    ```bash
    git checkout -b feature/ozellik-adi
    ```

    - Burada `feature/ozellik-adi`, yeni dalınızın ismi olacak. Örneğin, "yeni-karakter-eklendi" veya "hata-duzeltmesi" gibi anlamlı bir isim vermeniz gerekmektedir.
    - **Branch adları, hangi özelliği ya da düzeltmeyi içerdiğini net bir şekilde belirtmelidir.**

### Neden yeni bir dal oluşturulmalı? :rocket:
Ana dal üzerinde çalışmak, kod karmaşasına yol açabilir. Yeni dal oluşturmak, hem projenin genel yapısını bozmadan değişiklik yapmanıza olanak tanır hem de birden fazla geliştiricinin aynı projede paralel olarak çalışmasına imkan verir.

## 4. Değişikliklerinizi Yapın :hammer:
- Projede istediğiniz değişiklikleri yapın. Bu, yeni özellikler eklemek, hata düzeltmeleri yapmak veya belgeleri güncellemek olabilir.
- Projede değişiklik yaparken, önceki işlerinizi test edin ve mümkünse yeni yazdığınız kod için testler oluşturun.

### Değişiklik yaparken dikkat edilmesi gerekenler:
- **Kodun okunabilirliği:** Kodunuzu başkalarının anlaması kolay olmalıdır. Gerekli yorumlar ve anlamlı değişken isimleri kullanın.
- **Proje ile uyum:** Yapacağınız değişikliklerin mevcut proje yapısına uygun olduğundan emin olun. Bu, başkalarının kodu anlamasını kolaylaştırır.
- **Kodun test edilebilirliği:** Yeni özelliklerinizi eklerken, bu özelliklerin test edilmesini unutmayın.

## 5. Değişikliklerinizi Sahnele ve Komit Et :package:
- Yaptığınız değişiklikleri kaydedip Git'e eklemek ve komit etmek için şu komutları sırasıyla kullanın:

    ```bash
    git add .
    git commit -m "Özellik: Yeni bir özellik eklendi"
    ```

    - `git add .` tüm değişikliklerinizi sahneye ekler.
    - `git commit -m "Mesaj"` kısmında yapılan değişiklikleri net bir şekilde açıklayan bir mesaj ekleyin. Mesajlar kısa ve anlamlı olmalıdır.

    **Not:** Komit mesajları, yapılan değişikliklerin amacını anlamak için çok önemlidir. Mesajın özeti, yapılan değişikliğin neyle ilgili olduğunu açıkça belirtmelidir.

## 6. Dala Gönderme (Push) :arrow_up:
- Değişikliklerinizi GitHub'daki fork'unuza göndermek için şu komutu kullanın:

    ```bash
    git push origin feature/ozellik-adi
    ```

    Bu işlemle, yerel bilgisayarınızdaki dalı GitHub’daki fork'unuza göndermiş olacaksınız.

    **Not:** "Push" işlemi yerel bilgisayarınızdaki değişiklikleri uzak depoya gönderir. Bu işlem, yaptığınız değişikliklerin GitHub'da görünmesini sağlar.

## 7. Pull Request (PR) Oluştur :arrow_right_hook:
- Değişikliklerinizi ana projeye dahil edilmesi için bir **Pull Request** (PR) oluşturmanız gerekmektedir.
- GitHub'da fork'unuza gidin ve "New Pull Request" butonuna tıklayın.
- PR açıklamasında, yapılan değişiklikleri ve amacınızı net bir şekilde belirtin.

    **PR Açıklamasında Neler Olmalı:**
    - Hangi özelliği eklediğinizi veya hangi hatayı düzelttiğinizi açıklayın.
    - Yapılan değişikliklerin nasıl test edilebileceği hakkında bilgi verin.

## 8. Geri Bildirim ve Katkı :eyes:
- Proje yöneticisi veya diğer katkıcılar PR'ınızı gözden geçirecek ve gerekirse geri bildirimde bulunacaktır.
- Geri bildirimlere göre değişiklikler yapabilir ve PR'ınızı güncelleyebilirsiniz. Yorumlara açıklamalar yaparak daha anlaşılır hale getirebilirsiniz.
- **PR'ın onaylanması:** Yaptığınız değişikliklerin proje yöneticisi tarafından incelenip onaylanması gerekmektedir.

## 9. Kod Kalitesi ve Standartlara Uyma :wrench:
- Proje için belirlenmiş **kodlama standartlarına** ve **formatlara** dikkat edin.
- **Gereksiz kodlardan kaçının:** Projeyi daha sade ve bakımı kolay tutmak için gereksiz kodları kaldırın.
- Kodunuzu test edilebilir ve sürdürülebilir hale getirin. Test yazmak, yazdığınız kodun güvenilir olduğunu gösterir.

### Kod Kalitesi için Ekstra İpuçları:
- **DRY (Don’t Repeat Yourself):** Aynı kodu birden fazla kez yazmaktan kaçının. Fonksiyonlar ve metodlar kullanarak kod tekrarını önleyin.
- **Yüksek okuma seviyesi:** Kodunuzun okunabilir olmasını sağlamak için değişken isimlerini açıklayıcı tutun.

## 10. Test Yazma :test_tube:
- Yeni eklediğiniz özellikler için **ünite testleri** yazmak, kodunuzu sağlamlaştıracaktır.
- Testler, değişikliklerin projenin diğer bölümleriyle uyumlu olduğundan emin olmanıza yardımcı olur.

    - **Test Kategorileri:**
        - **Birim Testleri:** Yapılan değişikliğin bağımsız bir şekilde çalışıp çalışmadığını test eder.
        - **Entegre Testler:** Değişikliklerin diğer sistem bileşenleriyle uyumlu çalışıp çalışmadığını test eder.
  
## 11. Dokümantasyon :books:
- Eğer yaptığınız değişiklikler yeni bir özellik eklemekse, bu özelliğin nasıl kullanılacağına dair bir açıklama eklemeyi unutmayın.
- Proje dokümantasyonunu düzenlemek, başkalarının projeyi daha kolay kullanabilmesine olanak tanır.
- Kodunuzu daha anlaşılır kılmak için yorumlar ekleyin.

### Dokümantasyona Neler Dahil Edilmeli:
- Kullanıcı talimatları
- Özellik açıklamaları
- API kullanımı
- Yapılandırma talimatları
