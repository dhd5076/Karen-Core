//
//  KitchenView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/6/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct KitchenView: View {
    var body: some View {
        NavigationLink(destination: CookbookView()) {
            VStack {
                Text("View Cookbook")
            }
        }
        .navigationBarTitle("Kitchen")
    }
}

struct KitchenView_Previews: PreviewProvider {
    static var previews: some View {
        KitchenView()
    }
}
