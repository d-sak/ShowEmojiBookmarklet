javascript: (function ()
{
    if (typeof jQuery == 'undefined')
    {
        var d = document;
        var jq = d.createElement('script');
        jq.type = 'text/javascript';
        jq.onload = bml;
        jq.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
        d.body.appendChild(jq);
    }
    else {
        bml();
    };
    function bml()
    {
        var map = 
        {
            "E63E" : "F89F", "E63F" : "F8A0", "E640" : "F8A1", "E641" : "F8A2", "E642" : "F8A3", "E643" : "F8A4", 
            "E644" : "F8A5", "E645" : "F8A6", "E646" : "F8A7", "E647" : "F8A8", "E648" : "F8A9", "E649" : "F8AA", 
            "E64A" : "F8AB", "E64B" : "F8AC", "E64C" : "F8AD", "E64D" : "F8AE", "E64E" : "F8AF", "E64F" : "F8B0", 
            "E650" : "F8B1", "E651" : "F8B2", "E652" : "F8B3", "E653" : "F8B4", "E654" : "F8B5", "E655" : "F8B6", 
            "E656" : "F8B7", "E657" : "F8B8", "E658" : "F8B9", "E659" : "F8BA", "E65A" : "F8BB", "E65B" : "F8BC", 
            "E65C" : "F8BD", "E65D" : "F8BE", "E65E" : "F8BF", "E65F" : "F8C0", "E660" : "F8C1", "E661" : "F8C2", 
            "E662" : "F8C3", "E663" : "F8C4", "E664" : "F8C5", "E665" : "F8C6", "E666" : "F8C7", "E667" : "F8C8", 
            "E668" : "F8C9", "E669" : "F8CA", "E66A" : "F8CB", "E66B" : "F8CC", "E66C" : "F8CD", "E66D" : "F8CE", 
            "E66E" : "F8CF", "E66F" : "F8D0", "E670" : "F8D1", "E671" : "F8D2", "E672" : "F8D3", "E673" : "F8D4", 
            "E674" : "F8D5", "E675" : "F8D6", "E676" : "F8D7", "E677" : "F8D8", "E678" : "F8D9", "E679" : "F8DA", 
            "E67A" : "F8DB", "E67B" : "F8DC", "E67C" : "F8DD", "E67D" : "F8DE", "E67E" : "F8DF", "E67F" : "F8E0", 
            "E680" : "F8E1", "E681" : "F8E2", "E682" : "F8E3", "E683" : "F8E4", "E684" : "F8E5", "E685" : "F8E6", 
            "E686" : "F8E7", "E687" : "F8E8", "E688" : "F8E9", "E689" : "F8EA", "E68A" : "F8EB", "E68B" : "F8EC", 
            "E68C" : "F8ED", "E68D" : "F8EE", "E68E" : "F8EF", "E68F" : "F8F0", "E690" : "F8F1", "E691" : "F8F2", 
            "E692" : "F8F3", "E693" : "F8F4", "E694" : "F8F5", "E695" : "F8F6", "E696" : "F8F7", "E697" : "F8F8", 
            "E698" : "F8F9", "E699" : "F8FA", "E69A" : "F8FB", "E69B" : "F8FC", "E69C" : "F940", "E69D" : "F941", 
            "E69E" : "F942", "E69F" : "F943", "E6A0" : "F944", "E6A1" : "F945", "E6A2" : "F946", "E6A3" : "F947", 
            "E6A4" : "F948", "E6A5" : "F949", "E6CE" : "F972", "E6CF" : "F973", "E6D0" : "F974", "E6D1" : "F975", 
            "E6D2" : "F976", "E6D3" : "F977", "E6D4" : "F978", "E6D5" : "F979", "E6D6" : "F97A", "E6D7" : "F97B", 
            "E6D8" : "F97C", "E6D9" : "F97D", "E6DA" : "F97E", "E6DB" : "F980", "E6DC" : "F981", "E6DD" : "F982", 
            "E6DE" : "F983", "E6DF" : "F984", "E6E0" : "F985", "E6E1" : "F986", "E6E2" : "F987", "E6E3" : "F988", 
            "E6E4" : "F989", "E6E5" : "F98A", "E6E6" : "F98B", "E6E7" : "F98C", "E6E8" : "F98D", "E6E9" : "F98E", 
            "E6EA" : "F98F", "E6EB" : "F990", "E70B" : "F9B0", "E6EC" : "F991", "E6ED" : "F992", "E6EE" : "F993", 
            "E6EF" : "F994", "E6F0" : "F995", "E6F1" : "F996", "E6F2" : "F997", "E6F3" : "F998", "E6F4" : "F999", 
            "E6F5" : "F99A", "E6F6" : "F99B", "E6F7" : "F99C", "E6F8" : "F99D", "E6F9" : "F99E", "E6FA" : "F99F", 
            "E6FB" : "F9A0", "E6FC" : "F9A1", "E6FD" : "F9A2", "E6FE" : "F9A3", "E6FF" : "F9A4", "E700" : "F9A5", 
            "E701" : "F9A6", "E702" : "F9A7", "E703" : "F9A8", "E704" : "F9A9", "E705" : "F9AA", "E706" : "F9AB", 
            "E707" : "F9AC", "E708" : "F9AD", "E709" : "F9AE", "E70A" : "F9AF", "E6AC" : "F950", "E6AD" : "F951", 
            "E6AE" : "F952", "E6B1" : "F955", "E6B2" : "F956", "E6B3" : "F957", "E6B7" : "F95B", "E6B8" : "F95C", 
            "E6B9" : "F95D", "E6BA" : "F95E", "E6A6" : "F94A", "E6A7" : "F94B", "E6A8" : "F94C", "E6A9" : "F94D", 
            "E6AA" : "F94E", "E6AB" : "F94F", "E6AF" : "F953", "E6B0" : "F954", "E6B4" : "F958", "E6B5" : "F959", 
            "E6B6" : "F95A", "E6BB" : "F95F", "E6BC" : "F960", "E6BD" : "F961", "E6BE" : "F962", "E6BF" : "F963", 
            "E6C0" : "F964", "E6C1" : "F965", "E6C2" : "F966", "E6C3" : "F967", "E6C4" : "F968", "E6C5" : "F969", 
            "E6C6" : "F96A", "E6C7" : "F96B", "E6C8" : "F96C", "E6C9" : "F96D", "E6CA" : "F96E", "E6CB" : "F96F", 
            "E6CC" : "F970", "E6CD" : "F971", "E70C" : "F9B1", "E70D" : "F9B2", "E70E" : "F9B3", "E70F" : "F9B4", 
            "E710" : "F9B5", "E711" : "F9B6", "E712" : "F9B7", "E713" : "F9B8", "E714" : "F9B9", "E715" : "F9BA", 
            "E716" : "F9BB", "E717" : "F9BC", "E718" : "F9BD", "E719" : "F9BE", "E71A" : "F9BF", "E71B" : "F9C0", 
            "E71C" : "F9C1", "E71D" : "F9C2", "E71E" : "F9C3", "E71F" : "F9C4", "E720" : "F9C5", "E721" : "F9C6", 
            "E722" : "F9C7", "E723" : "F9C8", "E724" : "F9C9", "E725" : "F9CA", "E726" : "F9CB", "E727" : "F9CC", 
            "E728" : "F9CD", "E729" : "F9CE", "E72A" : "F9CF", "E72B" : "F9D0", "E72C" : "F9D1", "E72D" : "F9D2", 
            "E72E" : "F9D3", "E72F" : "F9D4", "E730" : "F9D5", "E731" : "F9D6", "E732" : "F9D7", "E733" : "F9D8", 
            "E734" : "F9D9", "E735" : "F9DA", "E736" : "F9DB", "E737" : "F9DC", "E738" : "F9DD", "E739" : "F9DE", 
            "E73A" : "F9DF", "E73B" : "F9E0", "E73C" : "F9E1", "E73D" : "F9E2", "E73E" : "F9E3", "E73F" : "F9E4", 
            "E740" : "F9E5", "E741" : "F9E6", "E742" : "F9E7", "E743" : "F9E8", "E744" : "F9E9", "E745" : "F9EA", 
            "E746" : "F9EB", "E747" : "F9EC", "E748" : "F9ED", "E749" : "F9EE", "E74A" : "F9EF", "E74B" : "F9F0", 
            "E74C" : "F9F1", "E74D" : "F9F2", "E74E" : "F9F3", "E74F" : "F9F4", "E750" : "F9F5", "E751" : "F9F6", 
            "E752" : "F9F7", "E753" : "F9F8", "E754" : "F9F9", "E755" : "F9FA", "E756" : "F9FB", "E757" : "F9FC"
        };
        
        if($('iframe').get(0)){
	        $('iframe').each(function (i)
	        {
	            var cc = $(this).contents();
	            var s = $(cc).find('body').html();
	            var rpl = [];
	            for (var i in s) {
	                var c = s.charCodeAt(i);
	                if (c > 58941 && c < 59224) {
	                    rpl.push( s.charAt(i) );
	                }
	            }
	            for (var i in rpl)
	            {
	                var n = map[ rpl[i].charCodeAt(0).toString(16).toUpperCase() ];
	                s = s.replace( rpl[i], '<img class=emj src=http://www001.upp.so-net.ne.jp/hdml/emoji/i/' + n.toUpperCase() + '.gif>' );
	            }
	            $(cc).find('body').html(s)
	        });
	        return ;
		}
        
        var s = $('body').html();
        var rpl = [];
        for (var i in s) {
            var c = s.charCodeAt(i);
            if (c > 58941 && c < 59224) {
                rpl.push( s.charAt(i) );
            }
        }
        for (var i in rpl)
        {
            var n = map[ rpl[i].charCodeAt(0).toString(16).toUpperCase() ];
            s = s.replace( rpl[i], '<img class=emj src=http://www001.upp.so-net.ne.jp/hdml/emoji/i/' + n.toUpperCase() + '.gif>' );
        }
        $('body').html(s);
        setTimeout(function(){
	        $('.emj').each(function(){
	        	var s=$(this).parent().css('font-size');
	        	$(this).css({ width: s, height: s });
	        });
		}, 500);
    }
})();
